import { useState } from 'react'
import { Accordion, Box, Input, useMediaQuery } from '@chakra-ui/react'
import { useParams } from 'react-router'
import Lottie from 'lottie-react'
import { FaqItem } from '../../components'
import { ResourceDetailsCard } from '../../components/Cards'
import useResources from '../../hooks/useResources'
import Page500 from '../Page500'
import styles from './ResourceDetails.module.scss'
import Loader from '../../assets/animations/72411-simple-grey-spinner.json'

function ResourceDetails() {
  const { branchName } = useParams()
  const [isLargerThan525] = useMediaQuery('(min-width: 525px)')
  const [term, setTerm] = useState('')

  const { data, isError, isLoading } = useResources(
    { term },
    branchName !== undefined ? branchName.toLowerCase() : '',
    term,
  )
  if (isError) {
    return <Page500 />
  }

  const debounce = (func: any) => {
    let timer: any
    return function (...args: any[]) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        func.apply(this, args)
      }, 1000)
    }
  }

  const handleSearch = async (e: any) => {
    const controller = new AbortController()
    setTerm(e.target.value)

    controller.abort()
  }
  const debouncedFunction = (e: any) => debounce(handleSearch(e))
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_name}>{`${branchName} Resources`}</h1>
        <div className={styles.search_container}>
          <Input
            type="search"
            placeholder="Search Resources"
            maxW={isLargerThan525 ? '300px' : 'none'}
            backgroundColor="var(--custom-white-v1)"
            onChange={debouncedFunction}
            value={term}
          />
          {term.length !== 0 && (
            <div className={styles.term_container}>
              {' '}
              <h4 className={styles.term}>Searched for &#34;{term}&#34;</h4>
            </div>
          )}
        </div>
      </div>
      <Box className={styles.page_body}>
        <Box className={styles.resource}>
          {isLoading ? (
            <div className={styles.loader_container}>
              <Lottie style={{ height: '200px', width: '200px' }} animationData={Loader} />
            </div>
          ) : (
            data.article.map((resource: any) => (
              <ResourceDetailsCard
                key={resource.id}
                heading={resource.heading}
                content={resource.content}
              />
            ))
          )}
        </Box>
        <h3 className={styles.faq_title}>FAQs</h3>
        <Accordion allowToggle mb={10}>
          {isLoading ? (
            <div className={styles.loader_container}>
              <Lottie style={{ height: '200px', width: '200px' }} animationData={Loader} />
            </div>
          ) : (
            data &&
            data.faq.map((faqs: any) => (
              <FaqItem key={faqs.id} id={faqs.id} title={faqs.heading} description={faqs.content} />
            ))
          )}
        </Accordion>
      </Box>
    </>
  )
}

export default ResourceDetails
