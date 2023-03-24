import { Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormTwoProps } from '../../../../utils/types'
import styles from './FormTwo.module.scss'
import { Error, Input, Select } from '../../../index'
import useStates from '../../../../hooks/useStates'

export default function FormTwo({ onNext, onBack, data }: FormTwoProps) {
  const { data: statesData, isSuccess: isStateSuccess } = useStates()
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      class_10_year: Yup.number()
        .integer('10th year must be an integer.')
        .min(2010, 'Invalid Year')
        .required('10th year is required.'),
      class_10_school: Yup.string().required('10th school is required.'),
      class_10_board: Yup.string().required('10th board is required.'),
      class_10_perc: Yup.number()
        .typeError('10th percentage must be a number.')
        .required('10th percentage is required.'),
      class_12_year: Yup.number()
        .integer('12th year must be an integer.')
        .min(2010, 'Invalid Year')
        .required('12th year is required.'),
      class_12_school: Yup.string().required('12th school is required.'),
      class_12_board: Yup.string().required('12th board is required.'),
      class_12_perc: Yup.number()
        .typeError('12th percentage must be a number.')
        .required('12th percentage is required.'),
      jee_mains_rank: Yup.number()
        .integer('Jee Rank must be an integer.')
        .typeError('Jee Rank must be an integer.')
        .required('Jee Rank is required.'),
      class_12_domicile: Yup.string().required('Domicile state is required'),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })
  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h2 className={styles.title}>Education Details</h2>
      <Input
        name="class_10_school"
        placeholder="10th School"
        value={formik.values.class_10_school}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.class_10_school && formik.errors.class_10_school ? (
        <Error errorMessage={formik.errors.class_10_school} />
      ) : null}

      <Input
        name="class_10_board"
        placeholder="10th Board"
        value={formik.values.class_10_board}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.class_10_board && formik.errors.class_10_board ? (
        <Error errorMessage={formik.errors.class_10_board} />
      ) : null}

      <Input
        name="class_10_year"
        placeholder="10th Year"
        type="number"
        value={formik.values.class_10_year || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.class_10_year && formik.errors.class_10_year ? (
        <Error errorMessage={formik.errors.class_10_year} />
      ) : null}

      <Input
        name="class_10_perc"
        placeholder="10th Percentage"
        type="number"
        value={formik.values.class_10_perc || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.class_10_perc && formik.errors.class_10_perc ? (
        <Error errorMessage={formik.errors.class_10_perc} />
      ) : null}

      <Input
        name="class_12_school"
        placeholder="12th School"
        value={formik.values.class_12_school}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.class_12_school && formik.errors.class_12_school ? (
        <Error errorMessage={formik.errors.class_12_school} />
      ) : null}

      <Input
        name="class_12_board"
        placeholder="12th Board"
        value={formik.values.class_12_board}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.class_12_board && formik.errors.class_12_board ? (
        <Error errorMessage={formik.errors.class_12_board} />
      ) : null}

      <Input
        name="class_12_year"
        placeholder="12th Year"
        type="number"
        value={formik.values.class_12_year || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.class_12_year && formik.errors.class_12_year ? (
        <Error errorMessage={formik.errors.class_12_year} />
      ) : null}

      <Input
        name="class_12_perc"
        placeholder="12th Percentage"
        type="number"
        value={formik.values.class_12_perc || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.class_12_perc && formik.errors.class_12_perc ? (
        <Error errorMessage={formik.errors.class_12_perc} />
      ) : null}

      {isStateSuccess && (
        <Select
          value={formik.values.class_12_domicile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="class_12_domicile"
          placeholder="Domicile State"
        >
          {statesData.map((datas: string) => (
            <option key={datas}>{datas}</option>
          ))}
        </Select>
      )}
      {formik.touched.class_12_domicile && formik.errors.class_12_domicile ? (
        <Error errorMessage={formik.errors.class_12_domicile} />
      ) : null}

      <Input
        name="jee_mains_rank"
        placeholder="JEE(Main) Rank"
        value={formik.values.jee_mains_rank || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.jee_mains_rank && formik.errors.jee_mains_rank ? (
        <Error errorMessage={formik.errors.jee_mains_rank} />
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
