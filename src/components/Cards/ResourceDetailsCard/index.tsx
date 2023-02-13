import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'

const useStyles = makeStyles({
  card: {
    backgroundColor: 'var(--custom-white-v1)',
  },
  title: {
    fontSize: '24px',
    paddingBottom: '10px',
  },
  description: {
    fontSize: '16px',
  },
})

export default function ResourceDetailsCard() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent>
        <Box className={classes.title}>Lizard</Box>
        <Box className={classes.description}>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Box>
      </CardContent>
    </Card>
  )
}
