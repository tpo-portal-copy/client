import { SidebarLayoutProps } from '../../utils/types'
import Sidebar from '../Sidebar'
import styles from './SidebarLayout.module.scss'

function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar_container}>
        <Sidebar />
      </div>
      <div className={styles.page}>{children}</div>
    </div>
  )
}

export default SidebarLayout
