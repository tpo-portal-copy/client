import { Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormTwoProps } from '../../../../utils/types'
import styles from './FormTwo.module.scss'
import { Error, Input } from '../../../index'

export default function FormTwo({ onNext, onBack, data }: FormTwoProps) {
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      tenthYear: Yup.number()
        .integer('10th year must be an integer.')
        .min(2010, 'Invalid Year')
        .required('10th year is required.'),
      tenthSchool: Yup.string().required('10th school is required.'),
      tenthBoard: Yup.string().required('10th board is required.'),
      tenthPercentage: Yup.number()
        .typeError('10th percentage must be a number.')
        .required('10th percentage is required.'),
      twelfthYear: Yup.number()
        .integer('12th year must be an integer.')
        .min(2010, 'Invalid Year')
        .required('12th year is required.'),
      twelfthSchool: Yup.string().required('12th school is required.'),
      twelfthBoard: Yup.string().required('12th board is required.'),
      twelfthPercentage: Yup.number()
        .typeError('12th percentage must be a number.')
        .required('12th percentage is required.'),
      jeeRank: Yup.number()
        .integer('Jee Rank must be an integer.')
        .typeError('Jee Rank must be an integer.')
        .required('Jee Rank is required.'),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })
  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h2 className={styles.title}>Education Details</h2>
      <Input
        name="tenthSchool"
        placeholder="10th School"
        value={formik.values.tenthSchool}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.tenthSchool && formik.errors.tenthSchool ? (
        <Error errorMessage={formik.errors.tenthSchool} />
      ) : null}

      <Input
        name="tenthBoard"
        placeholder="10th Board"
        value={formik.values.tenthBoard}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.tenthBoard && formik.errors.tenthBoard ? (
        <Error errorMessage={formik.errors.tenthBoard} />
      ) : null}

      <Input
        name="tenthYear"
        placeholder="10th Year"
        value={formik.values.tenthYear || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.tenthYear && formik.errors.tenthYear ? (
        <Error errorMessage={formik.errors.tenthYear} />
      ) : null}

      <Input
        name="tenthPercentage"
        placeholder="10th Percentage"
        value={formik.values.tenthPercentage || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.tenthPercentage && formik.errors.tenthPercentage ? (
        <Error errorMessage={formik.errors.tenthPercentage} />
      ) : null}

      <Input
        name="twelfthSchool"
        placeholder="12th School"
        value={formik.values.twelfthSchool}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.twelfthSchool && formik.errors.twelfthSchool ? (
        <Error errorMessage={formik.errors.twelfthSchool} />
      ) : null}

      <Input
        name="twelfthBoard"
        placeholder="12th Board"
        value={formik.values.twelfthBoard}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.twelfthBoard && formik.errors.twelfthBoard ? (
        <Error errorMessage={formik.errors.twelfthBoard} />
      ) : null}

      <Input
        name="twelfthYear"
        placeholder="12th Year"
        value={formik.values.twelfthYear || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.twelfthYear && formik.errors.twelfthYear ? (
        <Error errorMessage={formik.errors.twelfthYear} />
      ) : null}

      <Input
        name="twelfthPercentage"
        placeholder="12th Percentage"
        value={formik.values.twelfthPercentage || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.twelfthPercentage && formik.errors.twelfthPercentage ? (
        <Error errorMessage={formik.errors.twelfthPercentage} />
      ) : null}

      <Input
        name="jeeRank"
        placeholder="JEE(Main) Rank"
        value={formik.values.jeeRank || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.jeeRank && formik.errors.jeeRank ? (
        <Error errorMessage={formik.errors.jeeRank} />
      ) : null}

      <div className={styles.btn_container}>
        <Button
          background="linear-gradient(40deg,#45cafc,#303f9f)"
          color="white"
          _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
          className={styles.btn}
          type="submit"
          onClick={() => onBack(formik.values)}
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
          Next
        </Button>
      </div>
    </form>
  )
}
