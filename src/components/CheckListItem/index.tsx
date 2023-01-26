import { CheckListItemProps } from '../../utils/types'
import styles from './CheckListItem.module.scss'

function CheckListItem({ label, id }: CheckListItemProps) {
  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <label htmlFor={`${id}`} className={styles.checkBox}>
          <input id={`${id}`} className={styles.input} type="checkbox" />
          <div className={styles.transitions} />
        </label>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default CheckListItem
