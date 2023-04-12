import { Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './RecruitCard.module.scss'

interface RecruitCardProps {
  icon: IconProp
  label: string
  info: string
}

export default function RecruitCard({ icon, label, info }: RecruitCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <FontAwesomeIcon className={styles.icon} icon={icon} size="3x" fixedWidth />
      </div>
      <div />
      <div className={styles.fields_container}>
        <Text className={styles.txt1} pt={1}>
          {label}
        </Text>
        <Text className={styles.txt2} pt={2}>
          {info}
        </Text>
      </div>
    </div>
  )
}
