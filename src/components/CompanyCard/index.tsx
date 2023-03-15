import { Text } from '@chakra-ui/react'
import styles from './CompanyCard.module.scss'

interface CompanyCardProps {
  link: string
  label: string
  value: string
  type: string
}

export default function CompanyCard({ link, label, value, type }: CompanyCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <img
          className={styles.icon}
          src={`https://sakhanithnith.pagekite.me/media/${link}`}
          width={40}
          height={40}
          alt="icon"
        />
      </div>
      <div />
      <div className={styles.fields_container}>
        <Text className={styles.txt1}>{label}</Text>
        <Text className={styles.txt2}>
          {type.toLowerCase() === 'intern' ? 'Stipend Offered' : 'CTC Offered'}: {value}
        </Text>
      </div>
    </div>
  )
}
