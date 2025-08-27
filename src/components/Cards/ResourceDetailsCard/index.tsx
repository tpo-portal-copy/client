import { Box, Card, CardBody } from '@chakra-ui/react'
import styles from './ResourceDetailsCard.module.scss'

interface ResourceDetailsCardProps {
  heading: string
  content: string
}

export default function ResourceDetailsCard({ heading, content }: ResourceDetailsCardProps) {
  return (
    <Card className={styles.card}>
      <CardBody>
        <Box className={styles.title}>{heading}</Box>
        <Box className={styles.description}>{content}</Box>
      </CardBody>
    </Card>
  )
}
