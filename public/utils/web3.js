export default function Web3Module () {
  return typeof window !== 'undefined' ? window.Web3 : null
}
