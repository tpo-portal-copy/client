import { VStack, Text, Alert, AlertIcon, Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormTwoProps } from '../../../utils/types'
import styles from './FormTwo.module.scss'
import { Input } from '../../index'

export default function FormTwo({ onNext, onBack, data }: FormTwoProps) {
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      tenthYear: Yup.string()
        .min(4, 'Invalid Year')
        .max(4, 'Invalid Year')
        .matches(/^[0-9]+$/, 'Only integers are allowed')
        .required('*Required'),
      tenthSchool: Yup.string().required('*Required'),
      tenthBoard: Yup.string().required('*Required'),
      tenthPercentage: Yup.number().typeError('Should be integer').required('*Required'),
      twelfthYear: Yup.string()
        .min(4, 'Invalid Year')
        .max(4, 'Invalid Year')
        .matches(/^[0-9]+$/, 'Only integers are allowed')
        .required('*Required'),
      twelfthSchool: Yup.string().required('*Required'),
      twelfthBoard: Yup.string().required('*Required'),
      twelfthPercentage: Yup.number().typeError('Should be integer').required('*Required'),
      jeeRank: Yup.number()
        .integer('Rank should be integer')
        .typeError('Should be integer')
        .required('*Required'),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })
  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <VStack>
        <Input
          name="tenthSchool"
          placeholder="10th School"
          value={formik.values.tenthSchool}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.tenthSchool && formik.errors.tenthSchool ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.tenthSchool}
          </Alert>
        ) : null}

        <Input
          name="tenthBoard"
          placeholder="10th Board"
          value={formik.values.tenthBoard}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.tenthBoard && formik.errors.tenthBoard ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.tenthBoard}
          </Alert>
        ) : null}

        <Input
          name="tenthYear"
          placeholder="10th Year"
          value={formik.values.tenthYear || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.tenthYear && formik.errors.tenthYear ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.tenthYear}
          </Alert>
        ) : null}

        <Input
          name="tenthPercentage"
          placeholder="10th Percentage"
          value={formik.values.tenthPercentage || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.tenthPercentage && formik.errors.tenthPercentage ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.tenthPercentage}
          </Alert>
        ) : null}

        <Input
          name="twelfthSchool"
          placeholder="12th School"
          value={formik.values.twelfthSchool}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.twelfthSchool && formik.errors.twelfthSchool ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.twelfthSchool}
          </Alert>
        ) : null}

        <Input
          name="twelfthBoard"
          placeholder="12th Board"
          value={formik.values.twelfthBoard}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.twelfthBoard && formik.errors.twelfthBoard ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.twelfthBoard}
          </Alert>
        ) : null}

        <Input
          name="twelfthYear"
          placeholder="12th Year"
          value={formik.values.twelfthYear || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.twelfthYear && formik.errors.twelfthYear ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.twelfthYear}
          </Alert>
        ) : null}

        <Input
          name="twelfthPercentage"
          placeholder="12th Percentage"
          value={formik.values.twelfthPercentage || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.twelfthPercentage && formik.errors.twelfthPercentage ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.twelfthPercentage}
          </Alert>
        ) : null}

        <Input
          name="jeeRank"
          placeholder="JEE(Main) Rank"
          value={formik.values.jeeRank || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.jeeRank && formik.errors.jeeRank ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.jeeRank}
          </Alert>
        ) : null}

        <div className={styles.btn_container}>
          <Button
            className={styles.btn}
            colorScheme="blue"
            type="submit"
            onClick={() => onBack(formik.values)}
          >
            Back
          </Button>
          <Button
            className={styles.btn}
            colorScheme="blue"
            isDisabled={!formik.isValid}
            type="submit"
          >
            Next
          </Button>
        </div>
      </VStack>
    </form>
  )
}
