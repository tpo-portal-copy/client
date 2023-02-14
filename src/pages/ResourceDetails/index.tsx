import { Accordion, Box, Divider, Heading } from '@chakra-ui/react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'
import { FaqItem, ResourceDetailsCard } from '../../components'
import { FaqData } from '../../utils/Data/ResourcesData'
import { FaqProps } from '../../utils/types'
import styles from './ResourceDetails.module.scss'

function ResourceDetails() {
  const { state } = useLocation()

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_name}>{state.label} Resources</h1>
        <div className={styles.search_box}>
          <FontAwesomeIcon icon={faSearch} size="sm" className={styles.input_icon} />
          <input placeholder="Resource..." type="text" name="text" className={styles.input} />
        </div>
      </div>
      <Box className={styles.page_body}>
        <Box className={styles.resource}>
          <ResourceDetailsCard />
          <ResourceDetailsCard />
          <ResourceDetailsCard />
        </Box>
        <Divider height="10px" />
        <Heading>FAQs</Heading>
        <Accordion allowToggle mb={10}>
          {FaqData.map((faq: FaqProps) => (
            <FaqItem key={faq.id} {...faq} />
          ))}
        </Accordion>
      </Box>
    </>
  )
}

export default ResourceDetails
