import { ButtonProps } from '../../utils/types'
import styles from './Button.module.scss'

function Button({ varient, onclick, children }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className={`${styles.button} ${varient === 'primary' ? styles.primary : styles.secondary}`}
    >
      {children}
    </button>
  )
}

export default Button
