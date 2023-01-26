import styles from './DropDown.module.scss'
import { DropDownProps } from '../../utils/types'

export default function DropDown({ data }: DropDownProps) {
  return (
    <select className={styles.container}>
      {data.map((info) => (
        <option key={info.id} value={info.value}>
          {info.value}
        </option>
      ))}
    </select>
  )
}
