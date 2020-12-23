import { useShare } from '../hooks/useShare'
import { Button } from './Button/Button'

export function ShareButton ({ children, phrase }) {
  const [share, isAvailable] = useShare()

  if (!isAvailable) {
    return null
  }

  return (
    <Button
      disabled={!phrase}
      color='success'
      type='button'
      onClick={() => share(phrase)}
    >
      {children}
    </Button>
  )
}
