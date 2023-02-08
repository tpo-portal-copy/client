import { CheckListItemProps } from '../../utils/types'
import styles from './CheckListItem.module.scss'

function CheckListItem({ label, isMobile }: CheckListItemProps) {
  return (
    <div className={styles.content}>
      <input
        name={`${label}`}
        id={`${label}${isMobile ? 'mob' : ''}`}
        className={styles.input}
        type="checkbox"
      />
      <label htmlFor={`${label}${isMobile ? 'mob' : ''}`}>{label}</label>
    </div>
  )
}

export default CheckListItem
