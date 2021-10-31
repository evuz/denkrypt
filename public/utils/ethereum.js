import Web3Module from './web3'

export const ethereum = typeof window !== 'undefined' ? window.ethereum : null

export async function sign (data) {
  const Web3 = Web3Module()
  try {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts'
    })

    if (!accounts) {
      return
    }

    const web3 = new Web3(ethereum)
    const pass = await web3.eth.personal.sign(data, accounts[0])
    return pass
  } catch (error) {
    console.error(error)
  }
}
