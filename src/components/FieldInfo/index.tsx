import styles from './FieldInfo.module.scss'
import { FieldInfoProps } from '../../utils/types'

export default function FieldInfo({ label, value }: FieldInfoProps) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label} : </p>
      <p className={styles.value}> {value}</p>
    </div>
  )
}
