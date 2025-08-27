import { Text } from '@chakra-ui/react'
import styles from './LandingCompanyCard.module.scss'

interface LandingCompanyCardProps {
  link: string
  label: string
}

export default function LandingCompanyCard({ link, label }: LandingCompanyCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <img className={styles.icon} src={link} width={40} height={40} alt="icon" />
      </div>
      <div />
      <div className={styles.fields_container}>
        <Text className={styles.txt1}>{label}</Text>
      </div>
    </div>
  )
}
