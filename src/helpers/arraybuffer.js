export function str2ab (str) {
  const buf = new ArrayBuffer(str.length)
  const bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

export function ab2str (buf) {
  if (Array.isArray(buf)) {
    buf = buf.reduce((acc, el) => [...acc, ...el], [])
    buf = Uint8Array.from(buf)
  }
  return String.fromCharCode.apply(null, new Uint8Array(buf))
}
