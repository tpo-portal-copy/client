import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { ResourcesCardProps } from '../../../utils/types'
import ResourcesData from '../../../utils/Data/ResourcesData'

const useStyles = makeStyles({
  card: {
    position: 'relative',
    marginBottom: '1rem',
    display: 'flex',
  },
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    color: 'var(--custom-white-v1)',
    textAlign: 'left',
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '1rem 1rem',
    letterSpacing: '0.1rem',
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    padding: '2rem 2rem',
  },
})

export default function ResourcesCard({ id, label, imgUrl }: ResourcesCardProps) {
  const classes = useStyles()
  return (
    <Card sx={{ borderRadius: '20px' }} className={classes.card}>
      <CardMedia component="img" image={imgUrl} alt={label} />
      <CardContent className={classes.container}>
        <Box className={classes.text}>{label}</Box>
      </CardContent>
      <Box className={classes.btn}>
        <Link
          to={`/resource-details/${id}`}
          state={ResourcesData[id]}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Button sx={{ fontSize: '15px' }} variant="contained" size="small" color="inherit">
            Learn More
          </Button>
        </Link>
      </Box>
    </Card>
  )
}
