import { useFormik } from 'formik'
import * as Yup from 'yup'
import { memo, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  useMediaQuery,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import styles from './StudentData.module.scss'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'
import useStudentData from '../../hooks/useStudentData'
import { StudentDataFilters, ExperiencesSidebar, Input, Paginator, Select } from '../../components'
import { branchesAPI } from '../../utils/apis'
import useCourses from '../../hooks/useCourses'

function StudentData() {
  const [openFilters, setOpenFilters] = useState(false)
  const [isLargerThan880] = useMediaQuery('(min-width: 880px)')
  const [page, setPage] = useState(1)
  const { data: courseData, isSuccess: courseIsSuccess } = useCourses()
  const [course, setCourse] = useState({ id: 0, years: 0, name: '' })
  const [branch, setBranch] = useState<any>([])
  const [branchDetails, setBranchDetails] = useState({ id: 0, name: '' })
  const [filterCourse, setFilterCourse] = useState('')
  const [filterBranch, setFilterBranch] = useState('')
  const [filterCgpi, setFilterCgpi] = useState(0)
  const [filterIsSelected, setFilterIsSelected] = useState('')
  const [filterEligibility, setFilterEligibility] = useState('')

  const MemoizedExperiencesSideBar = memo(ExperiencesSidebar)

  const {
    data,
    isError,
    isSuccess,
    isLoading: studentIsLoading,
  } = useStudentData(filterCourse, filterBranch, filterCgpi, page)

  const formik = useFormik({
    initialValues: {
      course: '',
      branch: '',
      category: '',
      cgpi: 0,
      selected: '',
      eligibility: '',
    },
    validationSchema: Yup.object().shape({
      course: Yup.string(),
      branch: Yup.string(),
      category: Yup.string(),
      cgpi: Yup.number(),
      selected: Yup.boolean(),
      eligibility: Yup.string(),
    }),
    onSubmit: () => {
      setFilterBranch(branchDetails.name)
      setFilterCgpi(formik.values.cgpi)
      setFilterCourse(course.name)
      setFilterIsSelected(formik.values.selected)
      setFilterEligibility(formik.values.eligibility)
    },
  })

  const handleCourseChange = async (e: any) => {
    const parsedObj = JSON.parse(e.target.value)
    setCourse(parsedObj)

    formik.setFieldValue('course', e.target.value)

    const res = await branchesAPI.get(`/${parsedObj.id}`)
    setBranch(res.data)
  }

  const handleBranchChange = (e: any) => {
    const parsedObj = JSON.parse(e.target.value)
    setBranchDetails(parsedObj)
    formik.setFieldValue('branch', e.target.value)
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
        <div className={styles.table_container}>
          <TableContainer overflowX="auto" className={styles.table}>
            <Table variant="unstyled" size="md">
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
                {studentData.results.map((datas: any) => {
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
        <div className={styles.filter_container}>{isLargerThan880 && <StudentDataFilters />}</div>
        <div className={styles.filter_mobile_container}>
          <FontAwesomeIcon
            onClick={() => {
              setOpenFilters(true)
            }}
            icon={faFilter}
            size="2x"
          />
          {openFilters && <MemoizedExperiencesSideBar setIsSidebarOpen={setOpenFilters} />}
        </div>
      </div>
    </>
  )
}

export default StudentData
