import styles from './FormField.module.scss'
import { FormFieldProps } from '../../utils/types'
import DropDown from '../DropDown'

export default function FormField({ label, role, data }: FormFieldProps) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      {role === 'field' ? (
        <input placeholder="Enter Here" className={styles.field} />
      ) : (
        <DropDown data={data} />
      )}
    </div>
  )
}
