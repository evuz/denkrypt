export function filterClassNames (classnames) {
  if (!classnames || typeof classnames !== 'object') {
    throw Error('classnames must be an object')
  }

  if (Array.isArray(classnames)) {
    return classnames
      .reduce((acc, classname) => (classname ? acc.concat(classname) : acc), [])
      .join(' ')
  }

  return Object.keys(classnames)
    .filter((key) => classnames[key])
    .join(' ')
}
