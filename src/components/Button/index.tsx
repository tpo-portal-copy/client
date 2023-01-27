import { ButtonProps } from '../../utils/types'
import styles from './Button.module.scss'

function Button({ varient, onclick, children, stretch }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className={`${stretch === false ? styles.button : styles.stretched} ${
        varient === 'primary' ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </button>
  )
}

export default Button
