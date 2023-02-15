import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import useOnOutsideClick from '../../hooks/useOnOutsideClick'
import navItems from '../../utils/Data/sidebarData'
import styles from './Header.module.scss'

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const sidebarRef = useRef(null)
  const location = useLocation()

  const openSidebar = () => {
    setIsSidebarVisible(true)
  }

  const closeSidebar = () => {
    setIsSidebarVisible(false)
  }

  useOnOutsideClick(sidebarRef, closeSidebar)
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={`${styles.overlay} ${isSidebarVisible ? styles.show : ''}`}>
          <div className={`${styles.sidebar_container}`} ref={sidebarRef}>
            <Sidebar onLinkClickHandler={closeSidebar} />
          </div>
        </div>
        <div className={styles.title_container}>
          <div className={styles.hamburger} onClick={openSidebar}>
            <FontAwesomeIcon icon={faBars} className={styles.icon} />
          </div>
          <Link to="/" className={styles.logo}>
            <img src="/nithLogo.png" alt="Nith Logo" />
            <p>NITH</p>
          </Link>
        </div>
        <nav className={styles.nav_items}>
          {navItems.slice(0, -1).map((navItem) => {
            return (
              <div key={navItem.id} className={styles.nav_item}>
                <NavLink
                  to={navItem.url}
                  className={`${styles.nav_item} ${
                    location.pathname.includes(navItem.url) ? styles.selected : ''
                  }`}
                >
                  {navItem.name}
                </NavLink>
              </div>
            )
          })}
        </nav>
        <Popover isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
          <PopoverTrigger>
            <div className={styles.profile_img}>
              <span>JK</span>
            </div>
          </PopoverTrigger>
          <PopoverContent
            w="170px"
            _focus={{
              outline: 'none',
              border: '0px',
            }}
            _focusVisible={{
              outline: 'none',
              border: '0px',
              boxShadow: 'none',
            }}
          >
            <PopoverArrow />
            <PopoverBody
              display="flex"
              flexDirection="column"
              _focus={{
                outline: 'none',
                border: '0px',
                boxShadow: 'none',
              }}
              _focusVisible={{
                outline: 'none',
                border: '0px',
                boxShadow: 'none',
              }}
            >
              <Link to="/profile" className={styles.option} onClick={onClose}>
                My Profile
              </Link>
              <Link to="/placement-policy" className={styles.option} onClick={onClose}>
                Placement Policy
              </Link>
              <Link to="/login" className={styles.option} onClick={onClose}>
                Logout
              </Link>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

export default Header
