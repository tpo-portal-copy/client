import styles from './ClusterCard.module.scss'
import { ClusterCardProps } from '../../../utils/types'

export default function ClusterCard({ title, range }: ClusterCardProps) {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>✅</span>
      <div className={styles.fields_container}>
        <span className={styles.cluster_title}>{title}</span>
        <span className={styles.cluster_range}>&#40;{range}&#41;</span>
      </div>
    </div>
  )
}
