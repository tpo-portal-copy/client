/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import jwtDecode from 'jwt-decode'
import Sidebar from '../Sidebar'
import useOnOutsideClick from '../../hooks/useOnOutsideClick'
import { navItemsStudent, navItemsTPO } from '../../utils/Data/sidebarData'
import styles from './Header.module.scss'
import {
  clearDataFromLocalStorage,
  getDataFromLocalStorage,
  getRole,
  isStudentEligibleForPlacementOrIntern,
} from '../../utils/functions'
import { studentLogoutAPI } from '../../utils/apis'
import { Role } from '../../utils/constants'

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const sidebarRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const openSidebar = () => {
    setIsSidebarVisible(true)
  }

  const closeSidebar = () => {
    setIsSidebarVisible(false)
  }

  useOnOutsideClick(sidebarRef, closeSidebar)
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [showLogoutLoader, setLogoutLoader] = useState(false)

  const handleLogout = async () => {
    try {
      setLogoutLoader(true)
      await studentLogoutAPI.post('/', {
        refresh_token: getDataFromLocalStorage('refresh_token'),
      })

      setLogoutLoader(false)

      clearDataFromLocalStorage()
      navigate('/home')
    } catch (err) {
      setLogoutLoader(false)
      console.log(err)
    }
  }

  let accessDecoded = null
  const accessToken = getDataFromLocalStorage('access_token')
  if (accessToken) {
    accessDecoded = jwtDecode<any>(accessToken)
  }

  const isAuthenticated = accessDecoded != null

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
        {!isAuthenticated && (
          <div className={styles.btns_container}>
            <button className={styles.btn}>
              <Link to="/login">Login</Link>
            </button>
            <button className={styles.btn}>
              <Link to="/register">Register</Link>
            </button>
          </div>
        )}
        {isAuthenticated && getRole() === Role.STUDENT && (
          <>
            <nav className={styles.nav_items}>
              {navItemsStudent.slice(0, -1).map((navItem) => {
                if (
                  isStudentEligibleForPlacementOrIntern() === false &&
                  navItem.name === 'Drives'
                ) {
                  return ''
                }

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
                  {'img_url' in accessDecoded ? (
                    <img src={accessDecoded?.img_url} alt="User Profile" />
                  ) : (
                    <img
                      src={`https://icotar.com/initials/${accessDecoded.first_name}.png?s=100&bg=03C988`}
                      alt="User Logo"
                    />
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent
                w="175px"
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
                  <Button
                    className={styles.option}
                    onClick={handleLogout}
                    isLoading={showLogoutLoader}
                    spinnerPlacement="end"
                    loadingText="Logging Out...."
                  >
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </>
        )}

        {isAuthenticated && getRole() === Role.TPO && (
          <>
            <nav className={styles.nav_items}>
              {navItemsTPO.slice(0, -1).map((navItem) => {
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
                  {'img_url' in accessDecoded ? (
                    <img src={accessDecoded?.img_url} alt="User Profile" />
                  ) : (
                    <img
                      src={`https://icotar.com/initials/${accessDecoded.first_name}.png?s=100&bg=03C988`}
                      alt="User Logo"
                    />
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent
                w="175px"
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
                  <Link to="/placement-policy" className={styles.option} onClick={onClose}>
                    Placement Policy
                  </Link>
                  <Button
                    className={styles.option}
                    onClick={handleLogout}
                    isLoading={showLogoutLoader}
                    spinnerPlacement="end"
                    loadingText="Logging Out...."
                  >
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
