import styles from './Button.module.scss'
import { ButtonProps } from '../../utils/types'

export default function Button({ title }: ButtonProps) {
  return (
    <div>
      <button type='button' className={styles.button}>
        <p>{title}</p>
      </button>
    </div>
  )
}
