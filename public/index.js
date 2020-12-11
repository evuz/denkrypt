import hydrate from 'preact-iso/hydrate'

import { Home } from './pages/Home/Home'
import { AppLayout } from './pages/_app'
// import { registerServiceWorker } from './utils/sw/register'

export function App () {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  )
}

hydrate(<App />)

export async function prerender (data) {
  const { default: prerender } = await import('preact-iso/prerender')
  return await prerender(<App {...data} />)
}

// registerServiceWorker()
