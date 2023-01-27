import styles from './ClusterCard.module.scss'
import { ClusterCardProps } from '../../../utils/types'
import Input from '../../Input'

export default function ClusterCard({ title, range, type }: ClusterCardProps) {
  return (
    <div className={styles.container}>
      {type === 'mark' ? <span className={styles.icon}>✅</span> : <Input type="checkbox" />}
      <div className={styles.fields_container}>
        <span className={styles.cluster_title}>{title}</span>
        <span className={styles.cluster_range}>{range}</span>
      </div>
    </div>
  )
}
