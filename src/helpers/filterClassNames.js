export function filterClassNames (classnames) {
  return Object.keys(classnames)
    .filter((key) => classnames[key])
    .join(' ')
}
