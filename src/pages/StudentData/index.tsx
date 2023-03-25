import { useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import styles from './StudentData.module.scss'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'
import useStudentData from '../../hooks/useStudentData'
import { Paginator } from '../../components'

function StudentData() {
  const [page, setPage] = useState(1)
  const { data, isError, isSuccess, isLoading } = useStudentData({ page }, page)

  if (isError) {
    return <Page500 />
  }

  if (isLoading || !isSuccess) {
    return <PageLoader />
  }

  const getGender = (x: string) => {
    switch (x) {
      case 'm':
        return 'Male'
      case 'f':
        return 'Female'
      default:
        return 'Other'
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_name}>Student Data</h1>
      </div>
      <div className={styles.content}>
        <TableContainer className={styles.table_container}>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Roll No</Th>
                <Th>Course</Th>
                <Th>Branch</Th>
                <Th>CGPI</Th>
                <Th>Gender</Th>
                <Th>Category</Th>
                <Th>Address</Th>
                <Th>Pin Code</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.results.map((datas: any) => {
                return (
                  <Tr key={datas.roll}>
                    <Td>{`${datas.first_name} ${datas.last_name}`}</Td>
                    <Td>{datas.roll}</Td>
                    <Td>{datas.course_name}</Td>
                    <Td>{datas.branch}</Td>
                    <Td>{datas.cgpi}</Td>
                    <Td>{getGender(datas.gender)}</Td>
                    <Td>{datas.category}</Td>
                    <Td>{`${datas.city}, ${datas.state}`}</Td>
                    <Td>{datas.pincode}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>

        {data.results.length !== 0 && (
          <Paginator
            max={data.pages}
            curr={page}
            onNext={() => setPage(page + 1)}
            onPrev={() => setPage(page - 1)}
            disableNext={page === data.pages}
            disablePrev={page === 1}
          />
        )}
      </div>
    </>
  )
}

export default StudentData
