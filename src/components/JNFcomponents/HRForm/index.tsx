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

export default function HRForm({ parentState, setParentState }) {
  const [hrList, setHRList] = useState<Array<HR>>({})

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
    console.log('hello')
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
          <div className={styles.field} />
          <div className={styles.field}>
            <Input
              placeholder="Name"
              onChange={(e) => {
                setParentState({
                  ...parentState,
                  HrName: e.target.value,
                })
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={styles.field}>
            <Input
              type="number"
              placeholder="Mobile Number"
              onChange={(e) => {
                setParentState({
                  ...parentState,
                  HrMobile: e.target.value,
                })
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={styles.field}>
            <Input
              placeholder="Email"
              onChange={(e) => {
                setParentState({
                  ...parentState,
                  HrEmail: e.target.value,
                })
              }}
              onBlur={formik.handleBlur}
            />
          </div>
        </form>
        <div className={styles.checkbox}>
          <Checkbox name="consent" onChange={formik.handleChange}>
            I provide my consent to share my data with TPO for future oppurtunites. I also confirm
            that the information entered by me is accurate and best of my knowledge.
          </Checkbox>
        </div>

        <button type="button" className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}
