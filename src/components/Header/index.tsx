import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>Sakha Nith</div>
      </div>
    </header>
  )
}

export default Header
