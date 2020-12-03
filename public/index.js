import hydrate from 'preact-iso/hydrate'

import Home from './pages/home/index.js'

export function App () {
  return <Home />
}

hydrate(<App />)

export async function prerender (data) {
  const { default: prerender } = await import('preact-iso/prerender')
  return await prerender(<App {...data} />)
}
