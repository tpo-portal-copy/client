import { Button, Checkbox, Thead, Table, Th, Tr, Td, Tbody } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import * as Yup from 'yup'
import { useState } from 'react'
import { JNFFormFiveProps, HR } from '../../../utils/types'
import styles from './HRForm.module.scss'
import Input from '../../Input'
import Select from '../../Select'
import Error from '../../Error'

const hrTypes = [
  { id: 0, value: 'primary' },
  { id: 1, value: 'secondary' },
]

export default function HRForm({ onSubmit, onBack, data }: JNFFormFiveProps) {
  const [hrList, setHRList] = useState<Array<HR>>(data)

  const formik = useFormik({
    initialValues: {
      type: '',
      name: '',
      mobileNumber: undefined,
      email: '',
    },
    validationSchema: Yup.object().shape({
      type: Yup.string().required('Type is required'),
      name: Yup.string().required('Full Name is required'),
      mobileNumber: Yup.string()
        .matches(/^(\+91)?[6-9]\d{9}$/, 'Invalid Phone Number')
        .required('Phone number is required.'),
      email: Yup.string().email('Enter a valid email').required('Personal Email is required.'),
    }),
    onSubmit: () => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      addHR()
    },
  })

  const handleSubmit = () => {
    onSubmit(hrList)
  }

  const addHR = async () => {
    setHRList([
      ...hrList,
      {
        type: formik.values.type,
        name: formik.values.name,
        mobile: formik.values.mobileNumber,
        email: formik.values.email,
      },
    ])

    formik.resetForm()
  }

  const removeRow = (index: number) => {
    const list = [...hrList]
    list.splice(index, 1)
    setHRList(list)
  }

  return (
    <div className={styles.HRForm}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <h2 className={styles.title}>HR Details</h2>
          <div className={styles.field}>
            <Select
              value={formik.values.type}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="type"
              placeholder="HR Type"
            >
              {hrTypes.map((ty) => (
                <option key={ty.id}>{ty.value}</option>
              ))}
            </Select>
            {formik.touched.type && formik.errors.type ? (
              <Error errorMessage={formik.errors.type} />
            ) : null}
          </div>
          <div className={styles.field}>
            <Input
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <Error errorMessage={formik.errors.name} />
            ) : null}
          </div>
          <div className={styles.field}>
            <Input
              name="mobileNumber"
              type="number"
              placeholder="Mobile Number"
              value={formik.values.mobileNumber || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
              <Error errorMessage={formik.errors.mobileNumber} />
            ) : null}
          </div>
          <div className={styles.field}>
            <Input
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <Error errorMessage={formik.errors.email} />
            ) : null}
          </div>

          <Button type="submit" marginTop="4" marginLeft="4" display="flex" gap="1">
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            Add HR
          </Button>
        </form>
        {hrList.length > 0 && (
          <div className={styles.table_container}>
            <Table variant="simple">
              <Thead>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Phone Number</Th>
                <Th>Email</Th>
                <Th>Delete HR</Th>
              </Thead>
              <Tbody>
                {hrList.map((hr, index) => {
                  return (
                    <Tr key={hr.mobile}>
                      <Td padding="0">{hr.name}</Td>
                      <Td>{hr.type}</Td>
                      <Td>{hr.mobile}</Td>
                      <Td>{hr.email}</Td>
                      <Td>
                        <Button
                          size="sm"
                          onClick={() => removeRow(index)}
                          backgroundColor="transparent"
                          _hover={{ backgroundColor: 'white' }}
                        >
                          <FontAwesomeIcon icon={faTrash} size="lg" color="#E64848" />
                        </Button>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </div>
        )}
        <div className={styles.checkbox}>
          <Checkbox name="consent" onChange={formik.handleChange}>
            I provide my consent to share my data with TPO for future oppurtunites. I also confirm
            that the information entered by me is accurate and best of my knowledge.
          </Checkbox>
        </div>
      </div>
    </div>
  )
}
