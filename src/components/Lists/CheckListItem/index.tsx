import { CheckListItemProps } from '../../../utils/types'
import CheckBox from '../../CheckBox'
import styles from './CheckListItem.module.scss'

function CheckListItem({ label }: CheckListItemProps): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <CheckBox />
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default CheckListItem
