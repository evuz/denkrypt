import hydrate from 'preact-iso/hydrate'

import { Home } from './pages/Home/Home'
import { AppLayout } from './pages/_app'
import { createDocumentHead } from './utils/createDocumentHead'
import { registerServiceWorker } from './utils/sw/register'

export function App () {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  )
}

hydrate(<App />)

export async function prerender (data) {
  const { default: render } = await import('preact-iso/prerender')

  const result = await render(<App {...data} />)

  return {
    ...result,
    head: createDocumentHead()
  }
}

registerServiceWorker()
