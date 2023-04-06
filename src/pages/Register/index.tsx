import Lottie from 'lottie-react'
import { Text } from '@chakra-ui/react'
import Animation from '../../assets/animations/119048-login-verification.json'
import { StudentRegisterForm } from '../../components/Forms'
import styles from './Register.module.scss'

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Text className={styles.heading}>Hi There,</Text>
        <Text className={styles.heading}>Register Yourself</Text>
        <Lottie animationData={Animation} />
      </div>
      <div className={styles.content}>
        <Text className={styles.heading}>Hi There,</Text>
        <Text className={styles.sub_heading}>Register Yourself</Text>
        <StudentRegisterForm />
      </div>
    </div>
  )
}
