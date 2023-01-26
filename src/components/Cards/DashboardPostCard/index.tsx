import { Post } from '../../../utils/types'
import styles from './DashboardPostCard.module.scss'

function DashboardPostCard({ title, description, imageUrl, postedOn }: Post) {
  return (
    <div className={styles.card}>
      <div className={styles.main_container}>
        <img className={styles.post_image} src={imageUrl} alt="companyLogo" />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.separator} />
      <span className={styles.time_stamp}>{postedOn} min ago</span>
    </div>
  )
}

export default DashboardPostCard
