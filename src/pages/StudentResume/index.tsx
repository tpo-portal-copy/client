import { useFormik, ErrorMessage } from 'formik'
import axios, { AxiosRequestConfig } from 'axios'
import fs from 'fs'
import * as Yup from 'yup'
import { useState, useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Input,
  Select,
  TagLabel,
  Tag,
  TagCloseButton,
} from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Error, Paginator } from '../../components/index'
import styles from './StudentResume.module.scss'
import { CourseData, CourseChosen, BranchChosen, BranchData } from '../../utils/types'

import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'
import { useStudentDataWithRoll } from '../../hooks/useStudentData'
import { branchesAPI } from '../../utils/apis'
import useCourses from '../../hooks/useCourses'
import useBranches from '../../hooks/useBranches'

function StudentResume() {
  const btechData = useBranches(1).data
  const [branchData, setbranchData] = useState<Array<any>>([
    { id: 1, branchName: 'cse', branchFullname: 'computer science and engineering' },
    { id: 4, branchName: 'ce', branchFullname: 'Civil Engineering' },
    { id: 5, branchName: 'che', branchFullname: 'Chemical Engineering' },
    { id: 6, branchName: 'Mnc', branchFullname: 'Mathematics & Computing' },
    { id: 7, branchName: 'ee', branchFullname: 'Electrical Engineering' },
    { id: 8, branchName: 'ece', branchFullname: 'Electronics & Communication Engineering' },
    { id: 9, branchName: 'ep', branchFullname: 'Engineering Physics' },
    { id: 10, branchName: 'material', branchFullname: 'Mathematics & Computing' },
    { id: 11, branchName: 'mechanical', branchFullname: 'Mechanical Engineering' },
  ])
  const [page, setPage] = useState(1)
  const [courses, setCourses] = useState<Array<CourseChosen>>([])
  const [branchDetails, setBranchDetails] = useState({ id: 0, name: '' })
  const [courseStr, setCourseStr] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [filterRollNo, setfilterRollNo] = useState('')
  const [firstName, setFirstName] = useState('')
  const [filterFirstName, setfilterFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [filterLastName, setfilterLastName] = useState('null')

  /// //////////////

  useEffect(() => {
    if (branchData) {
      setBranchDetails({ id: Number(branchData[0].id), name: branchData[0].branchName })
    }
  }, [branchData])

  function extractCourse(clustersArr: Array<CourseChosen>) {
    const str = clustersArr.map((cluster) => cluster.value).join(',')
    setCourseStr(str)
  }

  const onSearch = () => {
    setPage(1)
    extractCourse(courses)
  }

  const HandleRollNoChange = (e: any) => {
    if (e.target.value === '') {
      return
    }
    setRollNo(e.target.value)
  }
  const HandleFirstNameChange = (e: any) => {
    if (e.target.value === '') {
      return
    }
    setFirstName(e.target.value)
  }
  const {
    data,
    isError,
    isSuccess,
    isLoading: studentIsLoading,
  } = useStudentDataWithRoll(filterRollNo, filterFirstName)

  const formik = useFormik({
    initialValues: {
      roll: '',
    },
    validationSchema: Yup.object().shape({
      roll: Yup.string(),
    }),
    validateOnChange: true,
    onSubmit: () => {
      setfilterRollNo(rollNo)
      setfilterFirstName(firstName)
    },
  })

  /// /////////////////////////////

  // Sorting execution
  if (isError) {
    return <Page500 />
  }

  if (studentIsLoading || !isSuccess) {
    return <PageLoader />
  }

  const studentData = data
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_name}>Student Data</h1>
      </div>
      <div className={styles.content}>
        <form onSubmit={formik.handleSubmit} className={styles.form_container}>
          <h2 className={styles.title}>Filters</h2>
          <div className={styles.filters}>
            <span className={styles.sortElement}>
              <Input
                onChange={HandleRollNoChange}
                value={rollNo}
                name="Roll_No"
                placeholder="Roll No"
                background="white"
              />
            </span>
            <span className={styles.sortElement}>
              <Input
                onChange={HandleFirstNameChange}
                value={firstName}
                name="First_name"
                placeholder="First Name"
                background="white"
              />
            </span>
          </div>

          {/* button Area view */}
          <div className={styles.buttonArea}>
            <Button
              className={styles.apply_btn}
              type="submit"
              background="linear-gradient(40deg,#45cafc,#303f9f)"
              // blue bgGradient
              color="white"
              _hover={{ background: 'linear-gradient(to bottom, #4682B4, #5F9EA0)' }} // grey gradient
            >
              Search
            </Button>
          </div>
        </form>

        <TableContainer className={styles.table_container}>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Roll No</Th>
                <Th>Course</Th>
                <Th>Branch</Th>
                <Th>Resume</Th>
                <Th>CGPI</Th>
              </Tr>
            </Thead>
            <Tbody>
              {studentData.results.map((datas: any) => {
                return (
                  <Tr key={datas.roll}>
                    <Td>{`${datas.first_name} ${datas.last_name}`}</Td>
                    <Td>{datas.roll}</Td>
                    <Td>{datas.course_name}</Td>
                    <Td>{datas.branch}</Td>
                    <Td>
                      <a href={datas.resume}>{datas.resume}</a>
                    </Td>
                    <Td>{datas.cgpi}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>

        {studentData.results.length !== 0 && (
          <Paginator
            max={studentData.pages}
            curr={page}
            onNext={() => setPage(page + 1)}
            onPrev={() => setPage(page - 1)}
            disableNext={page === studentData.pages}
            disablePrev={page === 1}
          />
        )}
      </div>
    </>
  )
}

export default StudentResume
