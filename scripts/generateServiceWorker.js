const path = require('path')
const fs = require('fs')
const utils = require('util')
const glob = require('fast-glob')

const fsReadFile = utils.promisify(fs.readFile)
const fsWriteFile = utils.promisify(fs.writeFile)
const fsAccess = utils.promisify(fs.access)

async function exist (path) {
  try {
    fsAccess(path)
    return true
  } catch (error) {
    return false
  }
}

const REGEX = /'{{(.*.)}}'/g
const NAME_SYMBOL = 'name'
const VERSION_SYMBOL = 'version'
const BUILD_SYMBOL = 'buildDir'
const SW_SYMBOL = 'swDir'

const BUILD_DIR_DEFAULT = 'dist'
const SW_DEFAULT = 'serviceWorker.js'

async function readConfig (directory) {
  const filePath = path.join(directory, 'sw.config.json')
  const pkgPath = path.join(directory, 'package.json')

  const checks = [filePath, pkgPath]
  const existFiles = await Promise.all(checks.map((v) => exist(v)))
  const noFile = existFiles.indexOf(false)

  if (noFile !== -1) {
    throw Error(
      `You must create file ${checks[noFile]} in your root directory`
    )
  }

  const [config, pkg] = await Promise.all([
    fsReadFile(filePath, 'utf-8'),
    fsReadFile(pkgPath, 'utf-8')
  ]).then((files) => {
    return files.map((file) => JSON.parse(file))
  })

  if (!config[NAME_SYMBOL]) {
    config[NAME_SYMBOL] = pkg.name
  }

  if (!config[VERSION_SYMBOL]) {
    config[VERSION_SYMBOL] = pkg.version
  }

  if (!config[BUILD_SYMBOL]) {
    config[BUILD_SYMBOL] = BUILD_DIR_DEFAULT
  }

  if (!config[SW_SYMBOL]) {
    config[SW_SYMBOL] = SW_DEFAULT
  }

  config[BUILD_SYMBOL] = path.join(directory, config[BUILD_SYMBOL])
  config[SW_SYMBOL] = path.join(config[BUILD_SYMBOL], config[SW_SYMBOL])

  return config
}

async function searchAssets (config) {
  if (!config.assets) {
    return []
  }

  let assets = await glob(config.assets, { cwd: config[BUILD_SYMBOL] })
  assets = assets.map((asset) => `/${asset}`)
  if (config.assets.includes('/')) {
    assets.push('/')
  }
  return assets
}

async function modifyServiceWorker (config) {
  const existFile = await exist(config[SW_SYMBOL])

  if (!existFile) {
    throw Error("Service worker file doesn't exist")
  }

  let file = await fsReadFile(config[SW_SYMBOL], 'utf-8')
  const groups = file.matchAll(REGEX)

  for (const group of groups) {
    const [value, name] = group
    file = file.replace(value, JSON.stringify(config[name]))
  }

  return fsWriteFile(config[SW_SYMBOL], file)
}

async function exec () {
  try {
    const config = await readConfig(process.cwd())
    if (config.assets) {
      config.assets = await searchAssets(config)
    }
    await modifyServiceWorker(config)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

exec()
