import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import { ResourcesCard } from '../../components/Cards'
import { resourcesData } from '../../utils/Data/resourcesData'
import styles from './Resources.module.scss'

function Resources() {
  const [isSmallerThan525] = useMediaQuery('(max-width: 525px)')

  return (
    <div className={styles.resources}>
      <h1 className={styles.page_name}>Resources</h1>
      <Grid
        justifyContent="center"
        placeItems="center"
        templateColumns="repeat(auto-fit,minmax(350px,1fr))"
        gap={isSmallerThan525 ? '1rem' : '1.5rem'}
        padding="1rem 2rem"
        marginBottom="3rem"
      >
        {resourcesData.map((dept: any) => (
          <GridItem key={dept.id}>
            <ResourcesCard imgUrl={dept.imgUrl} label={dept.label} />
          </GridItem>
        ))}
      </Grid>
    </div>
  )
}

export default Resources
