import { NavLink } from 'react-router-dom'
import menuIcon from '../../assets/svgs/menuIcon.svg'
import styles from './Header.module.scss'

function Header() {
  const navItems = [
    { name: 'Dashboard', url: '/' },
    {
      id: 0,
      name: 'Drives',
      url: '/drives',
    },
    {
      id: 1,
      name: 'Experiences',
      url: '/experiences',
    },
    {
      id: 2,
      name: 'Resources',
      url: '/resources',
    },
    {
      id: 3,
      name: 'Results',
      url: '/results',
    },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>Sakha Nith</div>
        <nav className={styles.nav_items}>
          {navItems.map((navItem) => {
            return (
              <NavLink to={navItem.url} key={navItem.id} className={styles.nav_item}>
                {navItem.name}
              </NavLink>
            )
          })}
        </nav>
        <div className={styles.menu}>
          <img src={menuIcon} alt="Menu Icon" />
        </div>
      </div>
    </header>
  )
}

export default Header
