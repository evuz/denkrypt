import { useState } from 'preact/hooks'

import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { Progress } from '../../components/Progress/Progress'
import { MetamaskIcon } from '../../components/Icons/Metamask.icon'

import { passwordScore } from '../../utils/passwordScore'

import styles from './Password.module.css'
import { useMetamask } from '../../hooks/useMetamask'

function getPasswordProgress (pass) {
  const score = passwordScore(pass)
  const scorePercent = (100 / 6) * score
  return { percent: scorePercent }
}

const PASSPHRASE = 'Denkrypt passphrase'

export function PasswordContainer ({ value = '', onChange }) {
  const { sign, isAvailable: metamaskAvailable } = useMetamask()
  const [isMetamask, setIsMetamask] = useState(false)

  const progress = getPasswordProgress(value)

  const handleMetamaskConnect = async () => {
    const metamaskPass = await sign(PASSPHRASE)
    onChange(metamaskPass)
    setIsMetamask(true)
  }

  if (isMetamask) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Input
          name='secret'
          placeholder='Secret key'
          value={value}
          onChange={onChange}
          type='password'
        />
        {metamaskAvailable && (
          <Button icon color='primary' onClick={handleMetamaskConnect}>
            <MetamaskIcon />
          </Button>
        )}
      </div>
      <Progress
        placeholder='Secret key'
        percent={progress.percent}
        onChange={() => {}}
        type='password'
      />
    </div>
  )
}
