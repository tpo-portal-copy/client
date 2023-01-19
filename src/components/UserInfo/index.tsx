import styles from './UserInfo.module.scss'
import { UserInfoProps } from '../../utils/types'

export default function UserInfo({ label, value }: UserInfoProps) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{`${label} :`}</p>
      <p className={styles.value}>{value}</p>
    </div>
  )
}
