/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import { Select, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './Statistics.module.scss'
import { jobType, sessions, statsCardStyles } from '../../utils/Data/statisticsData'
import { PieChart, StatsCard, CompanyCard } from '../../components'
import useStatisticsData from '../../hooks/useStatisticsData'
import Page500 from '../Page500'
import { BasicStats, StatsInfo, TopCompanies } from '../../utils/types'
import PageLoader from '../../components/PageLoader'
import CompaniesTable from '../../components/CompaniesTable'

function Statistics() {
  const [job, setJob] = useState('Placement')
  const [session, setSession] = useState('2022-23')

  const [searchedCompany, setSearchedCompany] = useState('')

  const { data, isLoading, isSuccess, isError } = useStatisticsData(
    { type: job.toLowerCase(), session },
    job,
    session,
  )

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
    setSearchedCompany(e.target.value)

    controller.abort()
  }
  const debouncedFunction = debounce(handleSearch)

  const handleJobChange = (e: any) => {
    if (e.target.value === '') return
    setJob(e.target.value)
  }

  const handleSessionChange = (e: any) => {
    setSession(e.target.value)
  }

  if (isError) {
    return <Page500 />
  }

  if (isLoading || !isSuccess) {
    return <PageLoader />
  }

  const { statsInfo, topCompanies, basicStats } = data
  const arr: any[] = []
  const fill: any[] = []
  if (job !== 'PPO') {
    basicStats.map((obj: BasicStats) => {
      const newObj = { ...obj, value: obj.offers, id: obj.branch.toLowerCase() }

      const fillObj = { match: { id: obj.branch.toLowerCase() }, id: 'dots' }
      if (obj.offers !== 0) {
        fill.push(fillObj)
        arr.push(newObj)
      }

      return ''
    })
  }

  return (
    <>
      {' '}
      <div className={styles.page_container}>
        <h1 className={styles.page_name}>Statistics</h1>
        <div className={styles.filter_container}>
          <Select
            minWidth="150px"
            bgColor="white"
            w="100%"
            value={job}
            placeholder="Job Type"
            onChange={(e) => handleJobChange(e)}
          >
            {jobType.map((type) => (
              <option value={type.value} key={type.id}>
                {type.value}
              </option>
            ))}
          </Select>

          <Select
            w="100%"
            bgColor="white"
            value={session}
            placeholder="Session"
            onChange={(e) => handleSessionChange(e)}
          >
            {sessions.map((year) => (
              <option value={year.value} key={year.id}>
                {year.value}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div className={styles.master_container}>
        <div className={styles.stats_info_container}>
          {statsInfo.map((info: StatsInfo, idx: number) => (
            <StatsCard
              icon={statsCardStyles[idx].icon}
              key={info.id}
              value={info.value}
              label={info.label}
              bgColor={statsCardStyles[idx].bgColor}
              color={statsCardStyles[idx].color}
              iconColor={statsCardStyles[idx].iconColor}
            />
          ))}
        </div>
        {job === 'PPO' ? null : (
          <div className={styles.top_companies_container}>
            <Text className={styles.top_companies_heading}>Our Top Recruiting Partners</Text>
            <div className={styles.info_container_wrapper}>
              <div className={styles.info_container}>
                {topCompanies.map((companiesData: TopCompanies) => (
                  <CompanyCard
                    type={job}
                    link={companiesData.logo || 'https://picsum.photos/100'}
                    key={companiesData.logo}
                    label={companiesData.name}
                    value={
                      job.toLowerCase() === 'intern'
                        ? companiesData.max_stipend
                        : companiesData.max_ctc
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className={styles.table_graph_container}>
          <div className={styles.table_container}>
            <InputGroup>
              <Input
                onChange={debouncedFunction}
                style={{ borderColor: '#ccc' }}
                placeholder="Search For Company"
              />
              <InputRightElement children={<FontAwesomeIcon color="grey" icon={faSearch} />} />
            </InputGroup>

            <CompaniesTable session={session} type={job.toLowerCase()} company={searchedCompany} />
          </div>
          <div className={styles.graph_container}>
            {job === 'PPO' ? null : <PieChart data={arr} fill={fill} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Statistics
