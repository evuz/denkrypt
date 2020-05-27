export function percentToColor (percent) {
  if (percent > 75) {
    return 'success'
  } else if (percent > 50) {
    return 'secondary'
  } else if (percent > 25) {
    return 'warning'
  }
  return 'error'
}
