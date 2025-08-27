import { Button, VStack, Text, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import Lottie from 'lottie-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../../assets/animations/81544-rolling-check-mark.json'
import 'react-quill/dist/quill.snow.css'
import { Error, Select } from '../..'
import styles from './ResultForms.module.scss'
import { typeData } from '../../../utils/Data/resultAnnouncementData'
import useTPODrives from '../../../hooks/useTPODrives'
import { drivesAPI, eligibleStudentsAPI, onCampusAPI } from '../../../utils/apis'

export default function OnCampusResultForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  const [type, setType] = useState('')
  const [jobRoles, setJobRoles] = useState([])
  const [rolls, setRolls] = useState<any>([])
  const [uniqueList, setUniqueList] = useState<any>([])

  let driveArr = []

  const formik = useFormik({
    initialValues: {
      studentRollNo: '',
      type: '',
      drive: '',
      jobRole: '',
    },
    validationSchema: Yup.object().shape({
      studentRollNo: Yup.string().required('Student Roll Number is required').min(6),
      type: Yup.string().required('Type is required'),
      drive: Yup.string().required('Drive is required'),
      jobRole: Yup.string().required('Job Role is required'),
    }),
    onSubmit: async () => {
      const parsedObj = JSON.parse(formik.values.jobRole)
      const objToSend = {
        type: formik.values.type.toLowerCase(),
        job_role: parsedObj.id,
        selected_students: uniqueList,
      }

      try {
        const res = await onCampusAPI.post('/', objToSend)
      } catch (err) {
        console.log(err)
      }

      setIsLoading(!isLoading)
      setTimeout(() => {
        setIsLoading((prevState) => !prevState)
        setShowAnimation((state) => !state)
      }, 3000)
    },
  })

  const { isSuccess: isDriveSuccess, data: driveData } = useTPODrives({ type }, type)

  const addRow = () => {
    const idx = rolls.findIndex(
      (student: any) => student.roll_number === formik.values.studentRollNo,
    )

    if (uniqueList.find((student: any) => student.roll_number === formik.values.studentRollNo)) {
      return ''
    }

    const obj = {
      roll_number: rolls[idx].roll_number,
      name: rolls[idx].name,
      compensation: formik.values.type === 'Placement' ? rolls[idx].ctc : rolls[idx].stipend,
      role: rolls[idx].role,
      company: rolls[idx].company,
    }

    setUniqueList([...uniqueList, obj])
    return ''
  }

  const removeRow = (index: number) => {
    const list = [...uniqueList].filter((item, idx) => idx !== index - 1)
    setUniqueList([...list])
  }

  const handleTypeChange = (e: any) => {
    formik.setFieldValue('type', e.target.value)
    setType(e.target.value.toLowerCase())
  }

  const handleDriveChange = async (e: any) => {
    const parsedObj = JSON.parse(e.target.value)
    formik.setFieldValue('drive', e.target.value)

    const res = await drivesAPI.get(`/${parsedObj.id}`)
    setJobRoles(res.data.job_roles)
  }

  const handleJobRoleChange = async (e: any) => {
    const parsedObj = JSON.parse(e.target.value)
    formik.setFieldValue('jobRole', e.target.value)

    const res = await eligibleStudentsAPI.get('/', {
      params: {
        job_role: parsedObj.id,
      },
    })
    setRolls(res.data)
  }

  if (isDriveSuccess) {
    driveArr = driveData
  }

  return (
    <div className={styles.container}>
      {showAnimation ? (
        <div className={styles.animation_container}>
          <Lottie
            loop={false}
            autoPlay={false}
            animationData={Loading}
            className={styles.animation}
          />
          <Text className={styles.tag_line}>Announcement Created Successfully</Text>{' '}
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} className={styles.form_container}>
          <VStack align="stretch" spacing={2}>
            <>
              <Select
                value={formik.values.type}
                onBlur={formik.handleBlur}
                onChange={handleTypeChange}
                name="type"
                placeholder="Type"
              >
                {typeData.map((data) => (
                  <option value={data.value} key={data.id}>
                    {data.value}
                  </option>
                ))}
              </Select>

              {formik.touched.type && formik.errors.type ? (
                <Error errorMessage={formik.errors.type} />
              ) : null}

              <Select
                value={formik.values.drive}
                onBlur={formik.handleBlur}
                onChange={handleDriveChange}
                name="drive"
                placeholder="Drive"
              >
                {driveArr.map((data: any) => (
                  <option value={`{"id":${data.id}}`} key={data.id}>
                    {data.name}
                  </option>
                ))}
              </Select>

              {formik.touched.drive && formik.errors.drive ? (
                <Error errorMessage={formik.errors.drive} />
              ) : null}

              <Select
                value={formik.values.jobRole}
                onBlur={formik.handleBlur}
                onChange={handleJobRoleChange}
                name="jobRole"
                placeholder="Job Role"
              >
                {jobRoles.map((data: any) => (
                  <option value={`{"id":${data.id}}`} key={data.id}>
                    {data.role}
                  </option>
                ))}
              </Select>

              {formik.touched.jobRole && formik.errors.jobRole ? (
                <Error errorMessage={formik.errors.jobRole} />
              ) : null}

              <div className={styles.input_rollNo}>
                <Select
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="studentRollNo"
                  placeholder="Student Roll Number"
                  value={formik.values.studentRollNo}
                >
                  {rolls.map((data: any) => (
                    <option key={data.id}>{data.roll_number}</option>
                  ))}
                </Select>

                {formik.touched.studentRollNo && formik.errors.studentRollNo ? (
                  <Error errorMessage={formik.errors.studentRollNo} />
                ) : null}

                <Button
                  onClick={() => {
                    addRow()
                  }}
                  className={styles.add_btn}
                  isDisabled={formik.values.studentRollNo.length < 6 || !formik.isValid}
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                </Button>
              </div>

              {uniqueList.length > 0 && (
                <div className={styles.table}>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Roll Number</Th>
                        <Th>Student</Th>
                        <Th>Company</Th>
                        <Th>{formik.values.type === 'Placement' ? 'CTC' : 'Stipend'}</Th>
                        <Th>Role</Th>
                      </Tr>
                    </Thead>
                    {uniqueList.map((row: any, index: number) => (
                      <Tbody key={row.roll_number}>
                        <Tr>
                          <Td>{row.roll_number}</Td>
                          <Td>{row.name}</Td>
                          <Td>{row.company}</Td>
                          <Td>{row.compensation}</Td>
                          <Td>{row.role}</Td>
                          <Td>
                            <Button size="sm" onClick={() => removeRow(index + 1)}>
                              <FontAwesomeIcon icon={faUserMinus} />
                            </Button>
                          </Td>
                        </Tr>
                      </Tbody>
                    ))}
                  </Table>
                </div>
              )}

              <Button
                background="linear-gradient(40deg,#45cafc,#303f9f)"
                color="white"
                _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
                isLoading={isLoading}
                type="submit"
                isDisabled={!formik.isValid || uniqueList.length === 0}
              >
                Post
              </Button>
            </>
          </VStack>
        </form>
      )}
    </div>
  )
}
