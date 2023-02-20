import styles from './Input.module.scss'
import { InputProps } from '../../utils/types'

export default function Input({ name, placeholder, onChange, onBlur, value, type }: InputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {placeholder}
      </label>
      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={styles.field}
      />
    </div>
  )
}
