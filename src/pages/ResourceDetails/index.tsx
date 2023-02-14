import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Card, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useLocation } from 'react-router-dom'
import { ResourceDetailsCard } from '../../components'
import styles from './ResourceDetails.module.scss'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    gap: '1rem',
    padding: '0rem 2rem',
    '@media (max-width:525px)': {
      padding: '0rem 1rem',
    },
  },
  resource: {
    width: '70%',
    '@media (max-width:850px)': {
      width: '100%',
    },
  },
  faq: {
    width: '30%',
  },
  card: {
    marginBottom: '1rem',
  },
})

function ResourceDetails() {
  const classes = useStyles()
  const { state } = useLocation()
  const isMobile = useMediaQuery('(max-width:850px)')

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_name}>{state.label} Resources</h1>
        <div className={styles.search_box}>
          <FontAwesomeIcon icon={faSearch} size="sm" className={styles.input_icon} />
          <input placeholder="Resource..." type="text" name="text" className={styles.input} />
        </div>
      </div>
      <Box className={classes.container}>
        <Box className={classes.resource}>
          <Box className={classes.card}>
            <ResourceDetailsCard />
          </Box>
          <Box className={classes.card}>
            <ResourceDetailsCard />
          </Box>
          <Box className={classes.card}>
            <ResourceDetailsCard />
          </Box>
        </Box>
        {!isMobile && <Card className={classes.faq}>faq</Card>}
      </Box>
    </>
  )
}

export default ResourceDetails
