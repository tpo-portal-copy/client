import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Select } from '@chakra-ui/react'
import { useState } from 'react'
import styles from './CompanyWiseDetails.module.scss'
import { companyWiseDetails } from '../../utils/Data/companyWiseDetails'
import { clusterOptions } from '../../utils/Data/formUIData'
import { statisticsdetailsData } from '../../utils/Data/statisticsDetailsData'
import useCompanyWiseStatistics from '../../hooks/useCompanyWiseStatistics'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'
import useCourses from '../../hooks/useCourses'
import useBranches from '../../hooks/useBranches'

function CompanyWiseDetails() {
  const [selectedCourse, setSelectedCourse] = useState('')

  const [selectedBranch, setSelectedBranch] = useState('')

  const [companyData, setCompanyData] = useState(companyWiseDetails.selectedStudents)

  const [selectedCluster, setSelectedCluster] = useState('')

  const { data, isError, isSuccess, isLoading } = useCompanyWiseStatistics(
    'groww',
    'intern',
    selectedCluster,
    selectedCourse,
  )

  const { data: coursesData, isSuccess: isCoursesSuccess } = useCourses()

  if (isError) {
    return <Page500 />
  }

  if (isLoading || !isSuccess) {
    return <PageLoader />
  }

  function handleCourseChange(e: any) {
    const course = e.target.value
    setSelectedCourse(course)
  }
  function handleBranchChange(e: any) {
    const branch = e.target.value
    setSelectedBranch(branch)
  }

  function handleClusterChange(e: any) {
    const cluster = e.target.value
    setSelectedCluster(cluster)
  }

  const clusterType: any = clusterOptions.map((clust) => (
    <option key={clust.value} value={clust.value}>
      {clust.label}
    </option>
  ))

  const courses: any = coursesData.map((cours: any) => (
    <option key={cours.id} value={cours.name}>
      {cours.name}
    </option>
  ))

  const branches: any = statisticsdetailsData.courses
    .find((item) => item.courseName === selectedCourse)
    ?.branches.map((bran) => (
      <option key={bran.id} value={bran.branchName}>
        {bran.branchName}
      </option>
    ))

  return (
    <>
      <div className={styles.header_container}>
        <div>
          <h1 className={styles.page_name}>{data.company}</h1>
          <h3>{`(${data.totaloffers} offers)`}</h3>
        </div>
        <div className={styles.filter_container}>
          <div className={styles.filter}>
            {isCoursesSuccess && (
              <Select onChange={(e) => handleCourseChange(e)} placeholder="Courses">
                {courses}
              </Select>
            )}
          </div>
          <div className={styles.filter}>
            <Select onChange={(e) => handleBranchChange(e)} placeholder="Branches">
              {branches}
            </Select>
          </div>
          <div className={styles.filter}>
            <Select onChange={(e) => handleClusterChange(e)} placeholder="Cluster">
              {clusterType}
            </Select>
          </div>
        </div>
      </div>
      <div className={styles.body_container}>
        <div className={styles.data_container}>
          <TableContainer className={styles.table_container}>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th textAlign="center">Name</Th>
                  <Th textAlign="center">Roll Number</Th>
                  <Th textAlign="center">Branch</Th>
                  <Th textAlign="center">Course</Th>
                  <Th textAlign="center">CTC(LPA)</Th>
                  <Th textAlign="center">Job Role</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.selectedStudents.map((student: any) => {
                  return (
                    <Tr key={student.id}>
                      <Td textAlign="center">{student.name}</Td>
                      <Td textAlign="center">{student.rollNumber}</Td>
                      <Td textAlign="center">{student.branch}</Td>
                      <Td textAlign="center">{student.course}</Td>
                      <Td textAlign="center">{student.ctc_offered}</Td>
                      <Td textAlign="center">{student.jobRole}</Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  )
}

export default CompanyWiseDetails
