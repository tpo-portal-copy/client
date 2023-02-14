import { Grid, GridItem } from '@chakra-ui/react'
import { ResourcesCard } from '../../components'
import { ResourcesData } from '../../utils/Data/ResourcesData'
import { ResourcesCardProps } from '../../utils/types'
import styles from './Resources.module.scss'

function Resources() {
  return (
    <>
      <h1 className={styles.page_name}>Resources</h1>
      <Grid
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(auto-fit,minmax(350px,1fr))"
        gap="2%"
        padding="1rem 2rem"
        marginBottom="3rem"
        width="1250px"
      >
        {ResourcesData.map((dept: ResourcesCardProps) => (
          <GridItem key={dept.id}>
            <ResourcesCard {...dept} />
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default Resources
