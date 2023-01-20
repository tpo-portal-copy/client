import { PastExperience, UpcomingDrive } from '../../components'
import styles from './Dashboard.module.scss'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className={styles.container}>
        <div className={styles.item_contained}>
          <h1>Upcoming Drive</h1>
          <UpcomingDrive />
        </div>
        <hr className={styles.horizontal_line} />
        <div className={styles.item_contained}>
          <h1>Past Experience</h1>
          <PastExperience />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
