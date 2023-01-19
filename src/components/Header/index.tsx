import menuIcon from '../../assets/svgs/menuIcon.svg'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>Sakha Nith</div>
        <div className={styles.menu}>
          <img src={menuIcon} alt="Menu Icon" />
        </div>
      </div>
    </header>
  )
}

export default Header
