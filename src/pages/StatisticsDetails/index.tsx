import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Select } from '@chakra-ui/react'
import styles from './StatisticsDetails.module.scss'
import useStatisticsDetailsData from '../../hooks/useStatisticsDetails'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'

function StatisticsDetails() {
  const date = new Date()

  let { company, type } = useParams()
  type = type === 'intern' ? 'intern' : 'placement'
  company = company === undefined ? '' : company
  const [session, setSession] = useState(
    date.getMonth() <= 5
      ? `${(date.getFullYear() - 1).toString()}-${date.getFullYear().toString().slice(2)}`
      : `${date.getFullYear().toString()}-${(date.getFullYear() + 1).toString().slice(2)}`,
  )

  const { data, isError, isSuccess, isLoading } = useStatisticsDetailsData(company, type, session)

  if (isError) {
    return <Page500 />
  }

  if (isLoading || !isSuccess) {
    return <PageLoader />
  }

  const handleSessionChange = (e: any) => {
    setSession(e.target.value)
  }

  return (
    <>
      <div className={styles.header_container}>
        <div>
          <h1 className={styles.page_name}>{data.company}</h1>
          <h3>{`(${data.totalOffers} offers)`}</h3>
        </div>
        <div className={styles.year_filter}>
          <Select placeholder="Select Session" onChange={(e) => handleSessionChange(e)}>
            <option>
              {date.getMonth() <= 5
                ? `${(date.getFullYear() - 4).toString()}-${(date.getFullYear() - 3)
                    .toString()
                    .slice(2)}`
                : `${(date.getFullYear() - 3).toString()}-${(date.getFullYear() - 2)
                    .toString()
                    .slice(2)}`}
            </option>
            <option>
              {date.getMonth() <= 5
                ? `${(date.getFullYear() - 3).toString()}-${(date.getFullYear() - 2)
                    .toString()
                    .slice(2)}`
                : `${(date.getFullYear() - 2).toString()}-${(date.getFullYear() - 1)
                    .toString()
                    .slice(2)}`}
            </option>
            <option>
              {date.getMonth() <= 5
                ? `${(date.getFullYear() - 2).toString()}-${(date.getFullYear() - 1)
                    .toString()
                    .slice(2)}`
                : `${(date.getFullYear() - 1).toString()}-${date
                    .getFullYear()
                    .toString()
                    .slice(2)}`}
            </option>
            <option>
              {date.getMonth() <= 5
                ? `${(date.getFullYear() - 1).toString()}-${date.getFullYear().toString().slice(2)}`
                : `${date.getFullYear().toString()}-${(date.getFullYear() + 1)
                    .toString()
                    .slice(2)}`}
            </option>
          </Select>
        </div>
      </div>
      <div className={styles.body_container}>
        {data.courses.map((course: any) => {
          return (
            course.totalCourseOffers !== 0 && (
              <div key={course.id} className={styles.course_container}>
                <h2 className={styles.course_title}>{course.courseName}</h2>
                <TableContainer className={styles.table_container}>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        {course.branches[0].branchName !== undefined ? <Th /> : null}
                        {course.roles.map((role: any) => (
                          <Th
                            textAlign="center"
                            key={role.id}
                          >{`${role.roleName}(${role.ctc} LPA)`}</Th>
                        ))}
                        <Th textAlign="center">Total Offers</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {course.branches.map((branch: any) => {
                        return (
                          <Tr key={branch.id}>
                            {branch?.branchName && <Td>{branch.branchName}</Td>}
                            {branch.offersRoleWise.map((offer: any) => {
                              return (
                                <Td key={offer.id} textAlign="center">
                                  {offer.noOfOffers}
                                </Td>
                              )
                            })}
                            <Td textAlign="center">{branch.totalBranchOffers}</Td>
                          </Tr>
                        )
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            )
          )
        })}
      </div>
    </>
  )
}

export default StatisticsDetails
