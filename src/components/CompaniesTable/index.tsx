import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Thead,
  Tr,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../assets/animations/72411-simple-grey-spinner.json'
import useCompaniesDetails from '../../hooks/useCompaniesDetails'
import { Role } from '../../utils/constants'
import { getRole } from '../../utils/functions'
import { CompaniesTableProps, TopCompanies } from '../../utils/types'
import Paginator from '../Paginator'
import styles from './CompaniesTable.module.scss'

const ctcTableHeader = [
  { id: 1, heading: 'Company' },
  { id: 2, heading: 'Offered CTC' },
]

const offersTableHeader = [
  { id: 1, heading: 'Company' },
  { id: 2, heading: 'Number of offers' },
]
export default function CompaniesTable({ session, type, company }: CompaniesTableProps) {
  const [currPage, setCurrPage] = useState(1)
  const [tab, setTab] = useState('ctc')
  const { data, isLoading, isError, isSuccess } = useCompaniesDetails({
    page: currPage,
    session,
    type,
    order: tab.toLowerCase(),
    company,
  })

  const tabs = ['ctc', 'offer']

  const handleTabChange = (e: any) => {
    setTab(tabs[e])
  }

  if (isError) {
    return (
      <div className={styles.animation_container}>
        <h1>Error while loading....</h1>
      </div>
    )
  }

  const linkString = (name: string) =>
    getRole() === Role.STUDENT
      ? `/statistics-details/${name}/${type}/${session}`
      : `/company-wise-details/${name}/${type}/${session}`

  return (
    <>
      <Tabs onChange={handleTabChange} colorScheme="blackAlpha" isLazy>
        <TabList>
          <Tab>{type === 'intern' ? 'Stipend Wise' : 'CTC Wise'}</Tab>
          <Tab>Offers Wise</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {isLoading || !isSuccess ? (
              <Lottie animationData={Loader} />
            ) : (
              <TableContainer>
                <Table>
                  <Thead>
                    <Tr>
                      {ctcTableHeader.map((header, idx) => (
                        <Th key={header.id}>
                          {idx === 1 && type === 'intern' ? 'Stipend Offered' : header.heading}
                        </Th>
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.results.map((datas: TopCompanies) => (
                      <Tr key={datas.name}>
                        <Td>
                          <Link to={linkString(datas.name)}>{datas.name}</Link>
                        </Td>
                        <Td>{type === 'intern' ? datas.max_stipend : datas.max_ctc}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </TabPanel>
          <TabPanel>
            {isLoading || !isSuccess ? (
              <Lottie animationData={Loader} />
            ) : (
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
                    {data.results.map((datas: TopCompanies) => (
                      <Tr key={datas.name}>
                        <Td>
                          <Link to={linkString(datas.name)}>{datas.name}</Link>
                        </Td>
                        <Td>{datas.offers}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>

      {data != null && (
        <Paginator
          onPrev={() => setCurrPage(currPage - 1)}
          onNext={() => setCurrPage(currPage + 1)}
          curr={currPage}
          max={data.pages}
          disablePrev={currPage === 1}
          disableNext={currPage === data.pages}
        />
      )}
    </>
  )
}
