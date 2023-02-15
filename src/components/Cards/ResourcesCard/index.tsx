import { Card, Button, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ResourcesCardProps } from '../../../utils/types'
import styles from './ResourcesCard.module.scss'

export default function ResourcesCard({ id, label, imgUrl }: ResourcesCardProps) {
  return (
    <Card sx={{ borderRadius: '20px' }} className={styles.card}>
      <Image src={imgUrl} alt={label} className={styles.img} />
      <Text className={styles.title}>{label}</Text>
      <Link to={`/resource-details/${label}`}>
        <Button variant="solid" className={styles.btn}>
          See Now
        </Button>
      </Link>
    </Card>
  )
}
