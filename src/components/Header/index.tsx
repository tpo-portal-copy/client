import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar'
import useOnOutsideClick from '../../hooks/useOnOutsideClick'
import styles from './Header.module.scss'

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
      <div className={styles.hamburger} onClick={openSidebar}>
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
      </div>
      <div className={`${styles.overlay} ${isSidebarVisible ? styles.show : ''}`}>
        <div className={`${styles.sidebar_container}`} ref={sidebarRef}>
          <Sidebar onLinkClickHandler={closeSidebar} isMobile />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>Sakha Nith</div>
      </div>
    </header>
  )
}

export default Header
