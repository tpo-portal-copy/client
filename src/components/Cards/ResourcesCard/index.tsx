import { Card, Button, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ResourcesCardProps } from '../../../utils/types'
import styles from './ResourcesCard.module.scss'

export default function ResourcesCard({ label, imgUrl }: ResourcesCardProps) {
  return (
    <Card sx={{ borderRadius: '20px' }} className={styles.card}>
      <Image src={imgUrl} alt={label} className={styles.img} />
      <Text className={styles.title}>{label}</Text>
      <Link to={`/resources-details/${label}`}>
        <Button variant="solid" className={styles.btn}>
          Learn More
        </Button>
      </Link>
    </Card>
  )
}
