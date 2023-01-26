import styles from './ClusterList.module.scss'
import { ClusterListProps } from '../../utils/types'

export default function ClusterList({ clusterName, clusterRange }: ClusterListProps) {
  return (
    <div className={styles.container}>
      <input className={styles.checkbox} type="checkbox" />
      <div className={styles.cluster_info}>
        <span className={styles.cluster_name}>{clusterName}</span>
        <span className={styles.cluster_range}>{clusterRange}</span>
      </div>
    </div>
  )
}
