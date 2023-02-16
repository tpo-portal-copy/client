import { Select } from '@chakra-ui/react'
import styles from './Select.module.scss'
import { SelectProps } from '../../utils/types'

export default function Input({
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  children,
}: SelectProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {placeholder}
      </label>
      <Select
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={styles.field}
      >
        {children}
      </Select>
    </div>
  )
}
