import { NavLink } from 'react-router-dom'
import navItems from '../../utils/Data/sidebarData'
import { RouteProps } from '../../utils/types'
import styles from './Sidebar.module.scss'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {navItems.map((navItem: RouteProps) => {
        return (
          <NavLink to={navItem.url} key={navItem.id} className={styles.nav_item}>
            {navItem.name}
          </NavLink>
        )
      })}
    </div>
  )
}

export default Sidebar
