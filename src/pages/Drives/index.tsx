/* eslint-disable react/no-children-prop */
import { useState } from 'react'
import Lottie from 'lottie-react'
import { Input, InputGroup, InputRightElement, Select, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { clusterData } from '../../utils/Data/formUIData'
import NotFound from '../../assets/animations/94729-not-found.json'
import { DrivesCard } from '../../components/Cards'
import styles from './Drives.module.scss'
import useDrives from '../../hooks/useDrives'
import Page500 from '../Page500'
import LoadingAnimation from '../../assets/animations/98770-assistagro-loading-bars.json'
import { Paginator } from '../../components'

function Drives() {
  const [page, setPage] = useState(1)
  const [company, setCompany] = useState('')
  const [search, setSearch] = useState('')
  const { data, isSuccess, isError, isLoading } = useDrives({ page, company }, page, company)

  const onSearch = () => {
    setCompany(search)
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  if (isLoading || !isSuccess) {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Lottie style={{ height: '200px', width: '200px' }} animationData={LoadingAnimation} />
      </div>
    )
  }
  if (isError) {
    return <Page500 />
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_name}>Drives</h1>
        <div className={styles.filter_container}>
          <div className={styles.dropdown}>
            <Select placeholder="Choose Cluster">
              {clusterData.map((cluster) => {
                return (
                  <option key={cluster.id} value={cluster.clusterName}>
                    {cluster.clusterName}
                  </option>
                )
              })}
            </Select>
          </div>
          <div className={styles.search_box}>
            <InputGroup>
              <Input value={search} onChange={handleSearch} placeholder="Company" type="input" />
              <InputRightElement
                children={<FontAwesomeIcon cursor="pointer" onClick={onSearch} icon={faSearch} />}
              />
            </InputGroup>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {data.results.length === 0 ? (
          <div className={styles.lottie_container}>
            <Text className={styles.heading}>Oops....</Text>
            <Text className={styles.para}>Cannot find anything for &#34;{company}&#34;</Text>
            <div className={styles.animation_container}>
              <Lottie animationData={NotFound} />
            </div>
          </div>
        ) : (
          data.results.map((drive: any) =>
            drive.job_roles.map((desc: any) => (
              <DrivesCard
                key={desc.id}
                companyName={drive.company}
                isAptitudeTest={drive.aptitude_test}
                id={desc.id}
                imgUrl={drive.image_url}
                ctcOffered={desc.ctc}
                startingDate={drive.starting_date}
                modeOfHiring={drive.mode_of_hiring}
                isPpt={drive.pre_placement_talk}
                jobLocation={drive.job_location}
                type={drive.job_type}
                eligibleBatches={desc.eligible_batches}
                jobProfile={desc.role}
                cluster={desc.cluster}
              />
            )),
          )
        )}

        <Paginator
          max={data.pages}
          curr={page}
          onNext={() => setPage(page + 1)}
          onPrev={() => setPage(page - 1)}
          disableNext={page === data.pages}
          disablePrev={page === 1}
        />
      </div>
    </>
  )
}

export default Drives
