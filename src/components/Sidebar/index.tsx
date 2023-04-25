import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useLocation } from 'react-router-dom'
import { PortalLogo } from '../../assets/svgs'
import { navItemsStudent } from '../../utils/Data/sidebarData'
import { RouteProps, SidebarProps } from '../../utils/types'
import styles from './Sidebar.module.scss'

function Sidebar({ onLinkClickHandler }: SidebarProps) {
  const location = useLocation()

  const goToLink = () => {
    onLinkClickHandler()
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={PortalLogo} alt="Portal Logo" />
        <h1>NITH</h1>
      </div>
      <div className={styles.nav_items}>
        {navItemsStudent.map((navItem: NavItem) => {
          return (
            <NavLink
              to={navItem.url}
              onClick={() => goToLink()}
              key={navItem.id}
              className={`${styles.nav_item} ${
                location.pathname.includes(navItem.url) ? styles.selected : ''
              }`}
            >
              <FontAwesomeIcon icon={navItem.icon} />
              <span>{navItem.name}</span>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
