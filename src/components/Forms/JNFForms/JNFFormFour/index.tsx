import { VStack, Button, Checkbox } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { JNFFormFourProps } from '../../../../utils/types'
import styles from './JNFFormFour.module.scss'
import { Input } from '../../../index'

export default function JNFFormFour({ onSubmit, onBack, data }: JNFFormFourProps) {
  const [type, setType] = useState('')

  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      type: Yup.string(),
      name: Yup.string().required('name is required'),
      mobileNumber: Yup.number().required('job profile is required'),
      email: Yup.string().required(),
    }),
    onSubmit: (values) => {
      onSubmit()
    },
  })

  const handleTypeButton = (value: string) => {
    setType(value)
  }
  return (
    <form
      className={styles.container}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onSubmit={formik.handleSubmit}
    >
      <VStack w="100%" maxW="700px">
        <Input
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Input
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Input
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Checkbox name="consent" onChange={formik.handleChange}>
          I provide my consent to share my data with TPO for future oppurtunites. I also confirm
          that the information entered by me is accurate and best of my knowledge.
        </Checkbox>

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
      </VStack>
    </form>
  )
}
