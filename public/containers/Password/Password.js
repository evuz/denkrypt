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
  const metamask = useMetamask()

  if (metamask.isConnected) {
    return null
  }

  const progress = getPasswordProgress(value)
  async function handleMetamaskConnect () {
    const metamaskPass = await metamask.sign(PASSPHRASE)
    onChange(metamaskPass)
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
        {metamask.isAvailable && (
          <Button
            icon
            color='primary'
            disabled={metamask.isLoading}
            onClick={handleMetamaskConnect}
          >
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
