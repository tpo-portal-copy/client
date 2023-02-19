/* eslint-disable react/no-children-prop */
import {
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Table,
  Tbody,
  Thead,
  TableContainer,
  Tr,
  Th,
  Td,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './Statistics.module.scss'
import {
  chartData,
  ctcWiseData,
  offersWiseData,
  topCompaniesData,
  jobType,
  sessions,
  statsInfo,
} from '../../utils/Data/statisticsData'
import { PieChart, StatsCard, CompanyCard, Paginator } from '../../components'

const ctcTableHeader = [
  { id: 1, heading: 'Company' },
  { id: 2, heading: 'Offered CTC' },
]

const offersTableHeader = [
  { id: 1, heading: 'Company' },
  { id: 2, heading: 'Number of offers' },
]

function Statistics() {
  const [job, setJob] = useState('')
  const [session, setSession] = useState('')

  const handleJobChange = (e: any) => {
    setJob(e.target.value)
  }

  const handleSessionChange = (e: any) => {
    setSession(e.target.value)
  }

  const [currPage, setCurrPage] = useState(1)
  const maxPages = 10

  const handleNext = () => {
    if (currPage < maxPages) {
      setCurrPage(currPage + 1)
    }
  }

  const handlePrev = () => {
    if (currPage > 1 && currPage <= maxPages) {
      setCurrPage(currPage - 1)
    }
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
          {statsInfo.map((info) => (
            <StatsCard
              icon={info.icon}
              key={info.id}
              value={info.value}
              label={info.label}
              bgColor={info.bgColor}
              color={info.color}
              iconColor={info.iconColor}
            />
          ))}
        </div>
        <div className={styles.top_companies_container}>
          <Text className={styles.top_companies_heading}>Our Top Recruiting Partners</Text>
          <div className={styles.info_container_wrapper}>
            <div className={styles.info_container}>
              {topCompaniesData.map((data) => (
                <CompanyCard icon={data.icon} key={data.id} label={data.label} value={data.value} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.table_graph_container}>
          <div className={styles.table_container}>
            <InputGroup>
              <Input style={{ borderColor: '#ccc' }} placeholder="Search For Company" />
              <InputRightElement children={<FontAwesomeIcon color="grey" icon={faSearch} />} />
            </InputGroup>
            <Tabs colorScheme="blackAlpha">
              <TabList>
                <Tab>CTC Wise</Tab>
                <Tab>Offers Wise</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <TableContainer>
                    <Table>
                      <Thead>
                        <Tr>
                          {ctcTableHeader.map((header) => (
                            <Th key={header.id}>{header.heading}</Th>
                          ))}
                        </Tr>
                      </Thead>
                      <Tbody>
                        {ctcWiseData.map((data) => (
                          <Tr key={data.id}>
                            <Td>{data.company}</Td>
                            <Td>{data.offeredCtc}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel>
                  <TableContainer>
                    <Table>
                      <Thead>
                        <Tr>
                          {offersTableHeader.map((header) => (
                            <Th key={header.id}>{header.heading}</Th>
                          ))}
                        </Tr>
                      </Thead>

                      <Tbody>
                        {offersWiseData.map((data) => (
                          <Tr key={data.id}>
                            <Td>{data.company}</Td>
                            <Td>{data.offeredCtc}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              </TabPanels>
            </Tabs>

            <Paginator onPrev={handlePrev} onNext={handleNext} curr={currPage} max={maxPages} />
          </div>
          <div className={styles.graph_container}>
            <PieChart data={chartData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Statistics
