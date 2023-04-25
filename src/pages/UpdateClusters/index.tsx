/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Button, VStack, Table, Thead, Tr, Th, Tbody, Td, TableContainer } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import Lottie from 'lottie-react'
import Animation from '../../assets/animations/95580-time-table.json'
import 'react-quill/dist/quill.snow.css'
import { Error, Input, Select } from '../../components'
import styles from './UpdateClusters.module.scss'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'

export default function UpdateClusters() {
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      Oncampus: [],
      Offcampus: [],
      course: '',
    },
    validationSchema: Yup.object().shape({
      course: Yup.string().required('Course is required'),
    }),
    onSubmit: () => {
      setIsLoading(!isLoading)
    },
  })

  // if (isError) {
  //   return <Page500 />
  // }
  // if (courseLoading || !isSuccess) {
  //   return <PageLoader />
  // }

  // const handleCourseChange = async (e: any) => {
  //   const parsedObj = JSON.parse(e.target.value)
  //   setCourse(parsedObj)

  //   formik.setFieldValue('course', e.target.value)

  //   const res = await branchesAPI.get(`/${parsedObj.id}`)
  //   setBranch(res.data)

  //   const obj = res.data.branches.map((ele: any) => ({ ...ele, oncampus: 0, offcampus: 0 }))
  //   setList(obj)

  //   formik.setFieldValue(`Oncampus`, [])
  //   formik.setFieldValue(`Offcampus`, [])
  // }

  // const handleInputChange = (e: any, type: string, index: number) => {
  //   if (type === 'onCampus') {
  //     const num = Number(e.target.value)
  //     formik.setFieldValue(`Oncampus[${index}]`, num)
  //     const newL = [...list]
  //     newL[index].oncampus = num
  //     setList(newL)
  //   }
  //   if (type === 'offCampus') {
  //     const num = Number(e.target.value)
  //     formik.setFieldValue(`Offcampus[${index}]`, num)
  //     const newL = [...list]
  //     newL[index].offcampus = num
  //     setList(newL)
  //   }
  // }

  const addRow = () => {}

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.heading}>Post an Announcement</h2>
        <Lottie animationData={Animation} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Set Cluster Range</h1>
        <form onSubmit={formik.handleSubmit} className={styles.form_container}>
          <VStack align="stretch" spacing={4}>
            <>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>CLUSTER</Th>
                      <Th>STARTS (LPA)</Th>
                      <Th>END (LPA)</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>bch.branch_name</Td>
                      <Td>
                        <Input
                          type="number"
                          onBlur={formik.handleBlur}
                          name="Oncampus"
                          value={formik.values.Oncampus[1]}
                          onChange={formik.handleChange}
                        />
                      </Td>
                      <Td>
                        <Input
                          type="number"
                          onBlur={formik.handleBlur}
                          name="company"
                          value={formik.values.Offcampus[1]}
                          onChange={formik.handleChange}
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

              <Button>Add New Cluster</Button>

              <Button isLoading={isLoading} type="submit" isDisabled={!formik.isValid}>
                Post
              </Button>
            </>
          </VStack>
        </form>
      </div>
    </div>
  )
}
