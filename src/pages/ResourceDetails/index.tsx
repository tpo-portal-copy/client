import { Accordion, Box, Input, useMediaQuery } from '@chakra-ui/react'
import { useParams } from 'react-router'
import { FaqItem, ResourceDetailsCard } from '../../components'
import { faqData } from '../../utils/Data/resourcesData'
import { FaqProps } from '../../utils/types'
import styles from './ResourceDetails.module.scss'

function ResourceDetails() {
  const { branchName } = useParams()
  const [isLargerThan525] = useMediaQuery('(min-width: 525px)')

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_name}>{`${branchName} Resources`}</h1>
        <Input
          type="search"
          placeholder="Search Resources"
          maxW={isLargerThan525 ? '300px' : 'none'}
          backgroundColor="var(--custom-white-v1)"
        />
      </div>
      <Box className={styles.page_body}>
        <Box className={styles.resource}>
          <ResourceDetailsCard />
          <ResourceDetailsCard />
          <ResourceDetailsCard />
        </Box>
        <h3 className={styles.faq_title}>FAQs</h3>
        <Accordion allowToggle mb={10}>
          {faqData.map((faq: FaqProps) => (
            <FaqItem key={faq.id} {...faq} />
          ))}
        </Accordion>
      </Box>
    </>
  )
}

export default ResourceDetails
