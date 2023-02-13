import { Grid } from '@mui/material'
import { ResourcesCard } from '../../components'
import ResourcesData from '../../utils/Data/ResourcesData'
import { ResourcesCardProps } from '../../utils/types'
import styles from './Resources.module.scss'

function Resources() {
  return (
    <>
      {' '}
      <h1 className={styles.page_name}>Resources</h1>
      <Grid
        container
        padding={4}
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 2, sm: 3, md: 4 }}
      >
        {ResourcesData.map((dept: ResourcesCardProps) => (
          <Grid item key={dept.id} xs={1}>
            <ResourcesCard {...dept} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Resources
