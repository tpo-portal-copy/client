import { ErrorProps } from '../../utils/types'
import alertIcon from '../../assets/svgs/alert.svg'
import styles from './Error.module.scss'

function ErrorMessage({ errorMessage }: ErrorProps) {
  if (Array.isArray(errorMessage)) {
    return (
      <div>
        {errorMessage.map((error) => (
          <p key={error.toString()}>{error.toString()}</p>
        ))}
      </div>
    )
  }

  return <p className={styles.message}>{errorMessage}</p>
}

function Error({ errorMessage }: ErrorProps) {
  return (
    <div className={styles.error}>
      <img src={alertIcon} alt="Alert Icon" />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  )
}

export default Error
