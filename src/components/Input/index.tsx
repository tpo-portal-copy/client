/* eslint-disable no-nested-ternary */
import styles from './Input.module.scss'
import { InputProps } from '../../utils/types'

export default function Input({ label, type, options = [], id }: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {type === 'field' ? (
        <input id={id} placeholder="Enter Here" className={styles.field} />
      ) : type === 'list' ? (
        <select className={styles.drop_down_container}>
          {options.map((info) => (
            <option key={info.id} value={info.value}>
              {info.value}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} className={styles.checkbox} type="checkbox" />
      )}
    </div>
  )
}
