import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from '@chakra-ui/react'
import styles from './StudentData.module.scss'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'
import useStudentData from '../../hooks/useStudentData'
import { Input, Paginator, Select } from '../../components'

import { branchesAPI } from '../../utils/apis'
import useCourses from '../../hooks/useCourses'

function StudentData() {
  const [page, setPage] = useState(1)
  const { data: courseData, isSuccess: courseIsSuccess } = useCourses()
  const [course, setCourse] = useState({ id: 0, years: 0, name: '' })
  const [branch, setBranch] = useState<any>([])
  const [branchDetails, setBranchDetails] = useState({ id: 0, name: '' })
  const [filterCourse, setFilterCourse] = useState('')
  const [filterBranch, setFilterBranch] = useState('')
  const [filterCgpi, setFilterCgpi] = useState(0)

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
      Gender: '',
      cgpi: 0,
    },
    validationSchema: Yup.object().shape({
      course: Yup.string(),
      branch: Yup.string(),
      Gender: Yup.string(),
      cgpi: Yup.number(),
    }),
    onSubmit: () => {
      setFilterBranch(branchDetails.name)
      setFilterCgpi(formik.values.cgpi)
      setFilterCourse(course.name)
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
        <form onSubmit={formik.handleSubmit} className={styles.form_container}>
          <h2 className={styles.title}>Filters</h2>
          <div className={styles.filters}>
            {courseIsSuccess && (
              <Select
                value={formik.values.course}
                onChange={(e) => handleCourseChange(e)}
                onBlur={formik.handleBlur}
                name="course"
                placeholder="Course"
              >
                {courseData.map((datas: any) => (
                  <option
                    value={`{"id":${datas.id},"years":${datas.years},"name":"${datas.name}"}`}
                    key={datas.id}
                  >
                    {datas.name}
                  </option>
                ))}
              </Select>
            )}

            <Select
              value={formik.values.branch}
              onChange={(e) => handleBranchChange(e)}
              onBlur={formik.handleBlur}
              name="branch"
              placeholder="Branch"
            >
              {branch.length !== 0 &&
                branch.branches.map((datas: any) => (
                  <option value={`{"id":${datas.id},"name":"${datas.branchName}"}`} key={datas.id}>
                    {datas.branchName}
                  </option>
                ))}
            </Select>

            <Select
              value={formik.values.Gender}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="Gender"
              placeholder="Gender"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Select>

            <Input
              value={formik.values.cgpi}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="cgpi"
              placeholder="CGPI"
            />
          </div>

          <div className={styles.buttonArea}>
            <Button
              className={styles.apply_btn}
              type="submit"
              background="linear-gradient(40deg,#45cafc,#303f9f)"
              // blue bgGradient
              color="white"
              _hover={{ background: 'linear-gradient(to bottom, #4682B4, #5F9EA0)' }} // grey gradient
            >
              Apply
            </Button>

            <Button
              className={styles.apply_btn}
              type="button"
              onClick={() => {}}
              background="#808080"
              color="white"
              _hover={{ background: 'linear-gradient(90deg, #ffffff, #333333)' }}
            >
              <span className={styles.icons8MicrosoftExcel} />
              <span>download as Exel</span>
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
                <Th>CGPI</Th>
                <Th>Gender</Th>
                {/* <Th>Gender</Th> */}
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
                    {/* <Td>{datas.Gender}</Td> */}
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
    </>
  )
}

export default StudentData
