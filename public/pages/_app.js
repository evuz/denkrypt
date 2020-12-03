import { GithubCornerIcon } from '../components/Icons/GithubCorner.icon'

import styles from './_app.module.css'

export function AppLayout ({ children }) {
  return (
    <div className='App'>
      <GithubCornerIcon link='https://github.com/evuz/denkrypt' />
      <main className={styles.container}>{children}</main>
    </div>
  )
}
