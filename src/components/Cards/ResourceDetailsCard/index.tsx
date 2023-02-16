import { Box, Card, CardBody } from '@chakra-ui/react'
import styles from './ResourceDetailsCard.module.scss'

export default function ResourceDetailsCard() {
  return (
    <Card className={styles.card}>
      <CardBody>
        <Box className={styles.title}>Lizard</Box>
        <Box className={styles.description}>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Box>
      </CardBody>
    </Card>
  )
}
