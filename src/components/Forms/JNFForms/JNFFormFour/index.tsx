import { Button, Checkbox, Thead, Table, Th, Tr, Td, Tbody, TableContainer } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import * as Yup from 'yup'
import { useState } from 'react'
import { JNFFormFourProps, HRListProps } from '../../../../utils/types'
import styles from './JNFFormFour.module.scss'
import { Input, Select, Error } from '../../../index'

const HrTypes = [
  { id: 0, value: 'primary' },
  { id: 1, value: 'secondary' },
]

export default function JNFFormFour({ onSubmit, onBack, data }: JNFFormFourProps) {
  const [hrList, setHRList] = useState<Array<HRListProps>>([])

  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      type: Yup.string().required('Type is required'),
      name: Yup.string().required('Full Name is required'),
      mobileNumber: Yup.string()
        .matches(/^(\+91)?[6-9]\d{9}$/, 'Invalid Phone Number')
        .required('Phone number is required.'),
      email: Yup.string().email('Enter a valid email').required('Personal Email is required.'),
    }),
    onSubmit: (values) => {
      onSubmit(values)
    },
  })

  const uniqueList = hrList.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.hr_type === item.hr_type &&
          t.hr_name === item.hr_name &&
          t.hr_mobile_number === item.hr_mobile_number &&
          t.hr_email === item.hr_email,
      ),
  )

  const addHR = async () => {
    const res = await formik.validateForm()
    if (
      Object.values(res).length === 0 &&
      (hrList.length === 0 || hrList.find((hr) => hr.hr_name === formik.values.name) == null)
    ) {
      setHRList([
        ...uniqueList,
        {
          hr_type: formik.values.type,
          hr_name: formik.values.name,
          hr_mobile_number: formik.values.mobileNumber,
          hr_email: formik.values.email,
        },
      ])

      formik.setFieldValue('name', undefined)
      formik.setFieldValue('mobileNumber', undefined)
      formik.setFieldValue('type', undefined)
      formik.setFieldValue('email', undefined)
    }
  }

  const removeRow = (index: number) => {
    const list = [...hrList]
    list.splice(index, 1)
    setHRList(list)
  }
  return (
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
            {HrTypes.map((ty) => (
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

        <div className={styles.add_hr_button}>
          <Button onClick={addHR}>
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            Add More HR
          </Button>
        </div>
        <div className={styles.field}>
          {hrList.length !== 0 && (
            <>
              <h3 className={styles.heading}>List of HR</h3>
              <TableContainer className={styles.table_container}>
                <Table variant="simple">
                  <Thead>
                    <Th fontSize="16px" padding="0">
                      Name
                    </Th>
                    <Th fontSize="16px">Type</Th>
                    <Th fontSize="16px">Phone Number</Th>
                    <Th fontSize="16px">Email</Th>
                    <Th />
                  </Thead>
                  <Tbody>
                    {hrList.map((hr, index) => {
                      return (
                        <Tr key={hr.hr_mobile_number}>
                          <Td padding="0">{hr.hr_name}</Td>
                          <Td>{hr.hr_type}</Td>
                          <Td>{hr.hr_mobile_number}</Td>
                          <Td>{hr.hr_email}</Td>
                          <Td>
                            <Button size="sm" onClick={() => removeRow(index)}>
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </Td>
                        </Tr>
                      )
                    })}
                  </Tbody>
                </Table>
              </TableContainer>{' '}
            </>
          )}
        </div>

        <div className={styles.checkbox}>
          <Checkbox name="consent" onChange={formik.handleChange}>
            I provide my consent to share my data with TPO for future oppurtunites. I also confirm
            that the information entered by me is accurate and best of my knowledge.
          </Checkbox>
        </div>
        <div className={styles.btn_container}>
          <Button
            background="linear-gradient(40deg,#45cafc,#303f9f)"
            color="white"
            _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
            className={styles.btn}
            onClick={() => onBack(formik.values)}
            type="submit"
          >
            Back
          </Button>
          <Button
            background="linear-gradient(40deg,#45cafc,#303f9f)"
            color="white"
            _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
            className={styles.btn}
            isDisabled={!formik.isValid}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
