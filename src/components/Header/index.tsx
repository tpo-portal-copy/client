import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import Sidebar from '../Sidebar'
import useOnOutsideClick from '../../hooks/useOnOutsideClick'
import navItems from '../../utils/Data/sidebarData'

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const sidebarRef = useRef(null)

  const openSidebar = () => {
    setIsSidebarVisible(true)
  }

  const closeSidebar = () => {
    setIsSidebarVisible(false)
  }

  useOnOutsideClick(sidebarRef, closeSidebar)

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={`${styles.overlay} ${isSidebarVisible ? styles.show : ''}`}>
          <div className={`${styles.sidebar_container}`} ref={sidebarRef}>
            <Sidebar onLinkClickHandler={closeSidebar} isMobile />
          </div>
        </div>
        <div className={styles.title_container}>
          <div className={styles.hamburger} onClick={openSidebar}>
            <FontAwesomeIcon icon={faBars} className={styles.icon} />
          </div>
          <div className={styles.logo}>NITH</div>
        </div>
        <nav className={styles.nav_items}>
          {navItems.map((navItem) => {
            return (
              <NavLink key={navItem.id} to={navItem.url}>
                {navItem.name}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
