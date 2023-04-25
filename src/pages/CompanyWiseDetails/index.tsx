import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Select } from '@chakra-ui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './CompanyWiseDetails.module.scss'
import { clusterOptions } from '../../utils/Data/formUIData'
import useCompanyWiseStatistics from '../../hooks/useCompanyWiseStatistics'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'
import useCourses from '../../hooks/useCourses'
import useBranches from '../../hooks/useBranches'

function CompanyWiseDetails() {
  const [selectedCourse, setSelectedCourse] = useState({ id: 2, name: 'B.Tech' }) // default ID B.Tech Course

  const [selectedBranch, setSelectedBranch] = useState('')

  const [selectedCluster, setSelectedCluster] = useState('')

  let { company, type } = useParams()
  type = type === 'intern' ? 'intern' : 'placement'
  company = company === undefined ? '' : company

  const { data, isError, isSuccess, isLoading } = useCompanyWiseStatistics(
    company,
    type,
    selectedCluster,
    selectedCourse?.name,
    selectedBranch,
  )

  const {
    data: coursesData,
    isSuccess: isCoursesSuccess,
    isLoading: isCoursesLoading,
  } = useCourses()

  const { data: branchesData } = useBranches(selectedCourse?.id)

  if (isError) {
    return <Page500 />
  }

  function handleCourseChange(e: any) {
    const courseID = e.target.value
    // eslint-disable-next-line eqeqeq
    const course = coursesData.find((cour: any) => cour.id == courseID)

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
    <option key={cours.id} value={cours.id}>
      {cours.name}
    </option>
  ))

  const branches: any = branchesData?.branches.map((bran: any) => (
    <option key={bran.id} value={bran.branchName}>
      {bran.branchName}
    </option>
  ))

  return (
    <>
      <div className={styles.header_container}>
        <div>
          <h1 className={styles.page_name}>{data && data.company}</h1>
          {isSuccess && <h3>{`(${data && data.totaloffers} offers)`}</h3>}
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
      {isLoading || !isSuccess ? (
        <PageLoader />
      ) : (
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
                  {data &&
                    data.selectedStudents.map((student: any) => {
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
      )}
    </>
  )
}

export default CompanyWiseDetails
