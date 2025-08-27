/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Button, VStack, Table, Thead, Tr, Th, Tbody, Td, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import Lottie from 'lottie-react'
import Animation from '../../assets/animations/95580-time-table.json'
import 'react-quill/dist/quill.snow.css'
import { Error, Input, Select } from '../../components'
import styles from './NextPlacementEligibilityPercentage.module.scss'
import { branchesAPI, percentageEligibilityAPI } from '../../utils/apis'
import useCourses from '../../hooks/useCourses'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'

export default function NextPlacementEligibilityPercentage() {
  const { data: coursedata, isSuccess, isError, isLoading: courseLoading } = useCourses()
  const [isLoading, setIsLoading] = useState(false)
  const [courses, setCourses] = useState<any>({})
  const [branch, setBranch] = useState<any>([])
  const [list, setList] = useState<any>([])
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      Oncampus: [],
      Offcampus: [],
      years: [],
      course: '',
    },
    validationSchema: Yup.object().shape({
      course: Yup.string().required('Course is required'),
    }),
    onSubmit: async (values) => {
      try {
        await percentageEligibilityAPI.put('/', {
          course: courses,
          branches: list,
          courseYearAllowed: values.years,
        })
        setIsLoading(!isLoading)
        setTimeout(() => {
          setIsLoading((prevState) => !prevState)
          formik.resetForm()
          setCourses([])
          setBranch([])
        }, 3000)
      } catch (err: any) {
        console.log(err)
        toast({
          title: 'Error',
          description: err.response.data.detail,
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      }
    },
  })

  if (isError) {
    return <Page500 />
  }
  if (courseLoading || !isSuccess) {
    return <PageLoader />
  }

  const handleCourseChange = async (e: any) => {
    const parsedObj = JSON.parse(e.target.value)
    setCourses(parsedObj)

    formik.setFieldValue('course', e.target.value)

    const res = await branchesAPI.get(`/${parsedObj.id}`)
    setBranch(res.data)

    const obj = res.data.branches.map((ele: any) => ({ ...ele, oncampus: 0, offcampusppo: 0 }))
    setList(obj)

    formik.setFieldValue(`Oncampus`, [])
    formik.setFieldValue(`Offcampus`, [])
    formik.setFieldValue(`years`, [])
  }

  const handleInputChange = (e: any, type: string, index: number) => {
    if (type === 'onCampus') {
      const num = Number(e.target.value)
      formik.setFieldValue(`Oncampus[${index}]`, num)
      const newL = [...list]
      newL[index].oncampus = num
      setList(newL)
    }
    if (type === 'offCampus') {
      const num = Number(e.target.value)
      formik.setFieldValue(`Offcampus[${index}]`, num)
      const newL = [...list]
      newL[index].offcampusppo = num
      setList(newL)
    }
  }

  const handleYearChange = (e: any, index: number) => {
    const parsedObj = JSON.parse(e.target.value)
    formik.setFieldValue(`years[${index}]`, parsedObj)
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.heading}>Post an Announcement</h2>
        <Lottie animationData={Animation} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Update Courses</h1>
        <form onSubmit={formik.handleSubmit} className={styles.form_container}>
          <VStack align="stretch" spacing={4}>
            <>
              {isSuccess && (
                <Select
                  value={formik.values.course}
                  onChange={(e) => handleCourseChange(e)}
                  onBlur={formik.handleBlur}
                  name="course"
                  placeholder="Course"
                >
                  {coursedata.map((datas: any) => (
                    <option
                      value={`{"id":${datas.id},"years":${datas.years},"name":"${datas.name}"}`}
                      key={datas.id}
                    >
                      {datas.name}
                    </option>
                  ))}
                </Select>
              )}
              {formik.touched.course && formik.errors.course ? (
                <Error errorMessage={formik.errors.course} />
              ) : null}

              {Object.keys(courses).length !== 0 &&
                coursedata
                  .filter((x: any) => x.id === courses.id)[0]
                  .courseYearAllowed.filter((x: any) => x.year <= courses.years)
                  .map((datas: any, idx: number) => (
                    <Select
                      name={`years[${idx}]`}
                      onChange={(e) => handleYearChange(e, idx)}
                      onBlur={formik.handleBlur}
                      value={formik.values.years[idx]}
                      placeholder={`Year ${datas.year} Allowed for`}
                      key={datas.id}
                    >
                      <option
                        value={`{"id":${datas.id},"year":${datas.year},"type_allowed":"intern"}`}
                      >
                        Internship
                      </option>
                      <option
                        value={`{"id":${datas.id},"year":${datas.year},"type_allowed":"placement"}`}
                      >
                        Placement
                      </option>
                      <option
                        value={`{"id":${datas.id},"year":${datas.year}, "type_allowed":"NA"}`}
                      >
                        None of the Both
                      </option>
                    </Select>
                  ))}

              <h1 className={styles.heading}>Eligibility Percentage for 2nd Placement</h1>

              <div className={styles.table}>
                {Object.keys(branch).length !== 0 && (
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th> {courses.name} </Th>
                        <Th>OnCampus Eligibility</Th>
                        <Th>OffCampus Eligibility</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {branch.branches.map((bch: any, idx: number) => (
                        <Tr key={bch.id}>
                          <Td>{bch.branch_fullname}</Td>
                          <Td>
                            <Input
                              type="number"
                              onBlur={formik.handleBlur}
                              name="Oncampus"
                              value={formik.values.Oncampus[idx]}
                              onChange={(e) => handleInputChange(e, 'onCampus', idx)}
                            />
                          </Td>
                          <Td>
                            <Input
                              type="number"
                              onBlur={formik.handleBlur}
                              name="company"
                              value={formik.values.Offcampus[idx]}
                              onChange={(e) => handleInputChange(e, 'offCampus', idx)}
                            />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                )}
              </div>

              <Button
                background="linear-gradient(40deg,#45cafc,#303f9f)"
                color="white"
                _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
                isLoading={isLoading}
                type="submit"
                isDisabled={!formik.isValid || Object.keys(branch).length === 0}
              >
                Post
              </Button>
            </>
          </VStack>
        </form>
      </div>
    </div>
  )
}
