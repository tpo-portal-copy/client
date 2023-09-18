import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from '@chakra-ui/react'
import styles from './StudentData.module.scss'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'
import useStudentData from '../../hooks/useStudentData'
import { Input, Paginator, Select } from '../../components'
import { MultiSelectDropDownData } from '../../utils/types'
import { branchesAPI } from '../../utils/apis'
import useCourses from '../../hooks/useCourses'
import MultiSelectDropDown from '../../components/MultiSelectDropDown'

function StudentData() {
  const [page, setPage] = useState(1)
  const { data: courseData, isSuccess: courseIsSuccess } = useCourses()
  const [course, setCourse] = useState({ id: 0, years: 0, name: '' })
  const [branch, setBranch] = useState<any>([])
  const [branchDetails, setBranchDetails] = useState({ id: 0, name: '' })
  const [filterCourse, setFilterCourse] = useState('')
  const [filterBranch, setFilterBranch] = useState('')
  const [filterCgpi, setFilterCgpi] = useState(0)

  /// //////////////
  // course options
  const [courseOptions, setCourseOptions] = useState<Array<MultiSelectDropDownData>>([])
  // course chosen
  const [coursesChose, setCoursesChose] = useState<Array<any>>([])

  const GetCourceOptions = () => {
    const CD = courseData
    const isCD = courseIsSuccess

    const courseOptionArray: Array<MultiSelectDropDownData> = []
    // courseOptionArray.push({ value: CD[0].id, label: CD[0].name })
    if (isCD && CD.length >= 0) {
      for (let i = 0; i < CD.length; i += 1) {
        courseOptionArray.push({ value: CD[i].id, label: CD[i].name })
      }
    }
    console.log(courseOptionArray)
    setCourseOptions(courseOptionArray)
    return courseOptionArray
  }

  useEffect(() => {
    GetCourceOptions()
  })

  // const getCourceOptions = useEffect(() => {
  //   const courseOptionArray: Array<MultiSelectDropDownData> = []
  //   if (courseIsSuccess && courseData.length !== 0) {
  //     courseData.map = (P: any) => {
  //       courseOptionArray.push({ value: P.id as string, label: P.name })
  //     }
  //   }
  //   console.log(courseOptionArray)
  //   setCourseOptions(courseOptionArray)
  //   return courseOptionArray
  // }, [courseData, courseIsSuccess])

  const handleCourseClick = (e: any) => {
    if (e === '' || coursesChose.find((C) => C.id === e)) {
      return
    }
    setCoursesChose([...coursesChose, { id: e, value: e }])
  }

  const handleCourseDelete = (idx: number) => {
    const items = coursesChose.filter((item, index) => index !== idx)
    setCoursesChose(items)
  }

  /// //////////////
  // branch options
  const [branchOptions, setBranchOptions] = useState<Array<MultiSelectDropDownData>>([])
  // branch chosen
  const [branchesChose, setBranchesChose] = useState<Array<any>>([])
  // // // branch chosen
  // // const [selectedBranch, setSelectedBranch] = useState('')
  // // // branch chosen
  // // const [branchStr, setBranchStr] = useState('')
  // // // branch chosen
  // // const [branchId, setBranchId] = useState(0)

  const GetBranchOptions = () => {
    const BD = branch
    const isBD = branch.length !== 0

    const branchOptionArray: Array<MultiSelectDropDownData> = []
    // branchOptionArray.push({ value: CD[0].id, label: CD[0].name })
    if (isBD) {
      for (let i = 0; i < BD.branches.length; i += 1) {
        branchOptionArray.push({ value: BD.branches[i].id, label: BD.branches[i].branchName })
      }
    }
    console.log(branchOptionArray)
    setBranchOptions(branchOptionArray)
    return branchOptionArray
  }

  useEffect(() => {
    GetBranchOptions()

    // cleanup
    return () => {
      setBranchOptions([])
    }
  })

  const handleBranchClick = (e: any) => {
    if (e === '' || branchesChose.find((C) => C.id === e)) {
      return
    }
    setBranchesChose([...branchesChose, { id: e, value: e }])
  }

  const handleBranchDelete = (idx: number) => {
    const items = branchesChose.filter((item, index) => index !== idx)
    setBranchesChose(items)
  }

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
              <div className={styles.dropdown}>
                <MultiSelectDropDown
                  placeholder="Choose Course"
                  clusterData={courseOptions}
                  choosenClusters={coursesChose}
                  onClick={(e) => {
                    handleCourseClick(e)
                  }}
                  onDelete={(idx) => {
                    handleCourseDelete(idx)
                  }}
                />
              </div>
            )}
            {courseIsSuccess && (
              <div className={styles.dropdown}>
                <MultiSelectDropDown
                  placeholder="Choose Branch"
                  clusterData={branchOptions}
                  choosenClusters={branchesChose}
                  onClick={(e) => {
                    handleBranchClick(e)
                  }}
                  onDelete={(idx) => {
                    handleBranchDelete(idx)
                  }}
                />
              </div>
            )}

            {/* <Select
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
            </Select> */}

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
                    <Td>{datas.Gender}</Td>
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
