export function decoded (value) {
  return window.atob(value)
}

export function encoded (value) {
  return window.btoa(value)
}
