import { ErrorProps } from '../../utils/types'
import alertIcon from '../../assets/svgs/alert.svg'
import styles from './Error.module.scss'

function Error({ errorMessage }: ErrorProps) {
  return (
    <div className={styles.error}>
      <img src={alertIcon} alt="Alert Icon" />
      <p className={styles.message}>{errorMessage}</p>
    </div>
  )
}

export default Error
