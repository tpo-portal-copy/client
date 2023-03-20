/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-children-prop */
import { useState } from 'react'
import Lottie from 'lottie-react'
import { Input, InputGroup, Text, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { clusterOptions } from '../../utils/Data/formUIData'
import NotFound from '../../assets/animations/94729-not-found.json'
import { DrivesCard } from '../../components/Cards'
import styles from './Drives.module.scss'
import useDrives from '../../hooks/useDrives'
import Page500 from '../Page500'
import { Paginator } from '../../components'
import MultiSelectDropDown from '../../components/MultiSelectDropDown'
import { ClusterChosen } from '../../utils/types'
import PageLoader from '../../components/PageLoader'

function Drives() {
  const [page, setPage] = useState(1)
  const [company, setCompany] = useState('')
  const [clusters, setClusters] = useState<Array<ClusterChosen>>([])
  const [search, setSearch] = useState('')
  const [clusterStr, setClusterStr] = useState('')
  const { data, isSuccess, isError, isLoading } = useDrives(
    { page, company, cluster: clusterStr },
    page,
    company,
    clusterStr,
  )

  function extractCluster(clustersArr: Array<ClusterChosen>): string {
    let str = ''
    if (clustersArr.length !== 0) {
      clustersArr.forEach((cluster, idx) => {
        str += cluster.id
        if (idx !== clustersArr.length - 1) {
          str += ','
        }
      })
    }
    setClusterStr(str)
    return str
  }

  const onSearch = () => {
    setPage(1)
    setCompany(search)
    extractCluster(clusters)
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  const handleMultiClick = (e: any) => {
    if (e === '' || clusters.find((cluster) => cluster.id === e)) {
      return
    }
    setClusters([...clusters, { id: e, value: e }])
  }

  const handleMultiDelete = (idx: number) => {
    const items = clusters.filter((item, index) => index !== idx)
    setClusters(items)
    extractCluster(items)
  }

  if (isLoading || !isSuccess) {
    return <PageLoader />
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
            <MultiSelectDropDown
              placeholder="Choose Clusters"
              clusterData={clusterOptions}
              choosenClusters={clusters}
              onClick={(e) => handleMultiClick(e)}
              onDelete={(idx) => handleMultiDelete(idx)}
            />
          </div>
          <div className={styles.search_box}>
            <InputGroup>
              <Input value={search} onChange={handleSearch} placeholder="Company" type="input" />
            </InputGroup>
          </div>
          <Button onClick={onSearch} backgroundColor="white">
            <FontAwesomeIcon cursor="pointer" icon={faSearch} />
          </Button>
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
