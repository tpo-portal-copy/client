import { ButtonProps } from '../../utils/types'
import styles from './Button.module.scss'

function Button({ varient, onclick, onsubmit, children, stretch, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onclick}
      onSubmit={onsubmit}
      className={`${stretch === false ? styles.button : styles.stretched} `}
    >
      {children}
    </button>
  )
}

export default Button

// ${
//   varient === 'primary' ? styles.primary : styles.secondary
// }
