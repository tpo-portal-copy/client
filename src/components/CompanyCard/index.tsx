import { Image, Text } from '@chakra-ui/react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CompanyCard.module.scss'

interface CompanyCardProps {
  icon: IconProp
  label: string
  value: string
}

export default function CompanyCard({ icon, label, value }: CompanyCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </div>
      <div />
      <div className={styles.fields_container}>
        <Text className={styles.txt1}>{label}</Text>
        <Text className={styles.txt2}>CTC Offered: {value}</Text>
      </div>
    </div>
  )
}
