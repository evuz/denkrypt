import { useState } from 'preact/hooks'

import styles from './Home.module.css'

import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { Snippet } from '../../components/Snippet/Snippet'
import { useEncode } from '../../hooks/useEncode'

import { useSearchParam } from '../../hooks/useSearchParam'
import { ShareButton } from '../../components/ShareButton'

import { PasswordContainer } from '../../containers/Password/Password'

export function Home () {
  const params = useSearchParam()
  const [phrase, setPhrase] = useState(params.phrase || '')
  const [secret, setSecret] = useState('')
  const { text, encrypt, decrypt } = useEncode()

  const buttonsDisabled = [secret.length, phrase.length].includes(0)
  return (
    <section className={styles.container}>
      <Header />
      <Input
        value={phrase}
        area
        name='phrase'
        label='Text to encode or decode'
        placeholder='Insert text'
        onChange={setPhrase}
      />
      <PasswordContainer value={secret} onChange={setSecret} />
      <div className={styles.buttons}>
        <Button
          disabled={buttonsDisabled}
          onClick={() => encrypt(phrase, secret)}
        >
          Encrypt!
        </Button>
        <Button
          disabled={buttonsDisabled}
          color='secondary'
          onClick={() => decrypt(phrase, secret)}
        >
          Decrypt!
        </Button>
        <ShareButton color='success' phrase={text}>
          Share
        </ShareButton>
      </div>
      {text ? <Snippet text={text} /> : null}
    </section>
  )
}
