import styles from './Header.module.css'

export function Header () {
  return (
    <header className={styles.Header}>
      <img className={styles.logo} src='/assets/logo.png' alt='denkrypt logo' />
      <h1 className={styles.title}>Welcome to Denkrypt!</h1>
    </header>
  )
}
