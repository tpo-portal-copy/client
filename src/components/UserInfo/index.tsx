import styles from './UserInfo.module.scss'
import { UserInfoProps } from '../../utils/types'

export default function UserInfo({ label, value }: UserInfoProps) {
  return (
    <div className={styles.container}>
      <text className={styles.label}>{label} :</text>
      <text className={styles.value}>{value}</text>
    </div>
  )
}
