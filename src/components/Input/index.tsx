/* eslint-disable no-nested-ternary */
import styles from './Input.module.scss'
import { InputProps } from '../../utils/types'

export default function Input({ label, type, options }: InputProps) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      {type === 'field' ? (
        <input placeholder="Enter Here" className={styles.field} />
      ) : type === 'list' ? (
        <select className={styles.drop_down_container}>
          {options.map((info) => (
            <option key={info.id} value={info.value}>
              {info.value}
            </option>
          ))}
        </select>
      ) : (
        <input className={styles.checkbox} type="checkbox" />
      )}
    </div>
  )
}

