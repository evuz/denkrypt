import { useState, useEffect } from 'preact/hooks'

import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { Progress } from '../../components/Progress/Progress'
import { useEncode } from '../../hooks/useEncode'

import { passwordScore } from '../../utils/passwordScore'

import styles from './Home.module.css'

export function Home () {
  const [phrase, setPhrase] = useState('')
  const [secret, setSecret] = useState('')
  const [progress, setProgress] = useState({ percent: 0 })
  const { text, encrypt, decrypt } = useEncode()

  useEffect(() => {
    const score = passwordScore(secret)
    const scorePercent = (100 / 6) * score
    setProgress({ percent: scorePercent })
  }, [secret])

  useEffect(() => {
    console.log(text)
  }, [text])

  return (
    <section className={styles.container}>
      <Header />
      <Input
        value={phrase}
        area
        placeholder='Insert text'
        onChange={setPhrase}
      />
      <div className={styles.secret}>
        <Input
          placeholder='Secret key'
          value={secret}
          onChange={setSecret}
          type='password'
        />
        <Progress
          placeholder='Secret key'
          percent={progress.percent}
          onChange={() => {}}
          type='password'
        />
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => encrypt(phrase, secret)}>Encrypt!</Button>
        <Button secondary onClick={() => decrypt(phrase, secret)}>
          Decrypt!
        </Button>
      </div>
    </section>
  )
}
