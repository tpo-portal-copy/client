import { Text } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import Animation from '../../assets/animations/119787-webpage-error.json'
import styles from './Page500.module.scss'

export default function Page500() {
  return (
    <div className={styles.container}>
      <Text className={styles.heading}>Oops....</Text>
      <Text className={styles.para}>Server Error</Text>

      <div className={styles.animation_container}>
        <Lottie animationData={Animation} />
      </div>
      <Link to="/" className={styles.link}>
        Go Back To Home
      </Link>
    </div>
  )
}
