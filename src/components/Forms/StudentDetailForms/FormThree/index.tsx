import { Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormThreeProps } from '../../../../utils/types'
import styles from './FormThree.module.scss'
import { Error, Input, Select } from '../../../index'

const courseData = [
  {
    id: 12,
    value: 'B.Tech',
  },
  {
    id: 13,
    value: 'M.Tech',
  },
  {
    id: 14,
    value: 'MBA',
  },
  {
    id: 15,
    value: 'MSc',
  },
]

const branchData = [
  {
    id: 2,
    value: 'Computer Science and Engg.',
  },
  {
    id: 3,
    value: 'Electronics and Communication Engg.',
  },
  {
    id: 4,
    value: 'Civil Engg.',
  },
  {
    id: 5,
    value: 'Mechanical Engg.',
  },
  {
    id: 6,
    value: 'Electrical Engg.',
  },
  {
    id: 7,
    value: 'Mathematics and Scientific Computing',
  },
  {
    id: 8,
    value: 'Applied Physics',
  },
  {
    id: 9,
    value: 'Chemical Engg.',
  },
  {
    id: 10,
    value: 'Material Science Engg.',
  },
]

const currentYearData = [
  { id: 1, label: 'I', value: 1 },
  { id: 2, label: 'II', value: 2 },
  { id: 3, label: 'III', value: 3 },
  { id: 4, label: 'IV', value: 4 },
  { id: 5, label: 'V', value: 5 },
]

export default function FormThree({ onNext, onBack, data }: FormThreeProps) {
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      course: Yup.string().required('Course is required.'),
      branch: Yup.string().required('Branch is required.'),
      cgpi: Yup.number().typeError('CGPI must be a number.').required('CGPI is required.'),
      active_backlog: Yup.number()
        .integer('Active backlog must be an integer.')
        .typeError('Active backlog must be an integer.')
        .required('Active backlog is required.'),
      total_backlog: Yup.number()
        .integer('Total backlog must be an integer.')
        .typeError('Total backlog must be an integer.')
        .required('Total backlog is required.'),
      gate_score: Yup.number()
        .typeError('Gate score must be a number.')
        .max(100, "Gate score can't be greater than 100."),
      cat_score: Yup.number()
        .typeError('Cat percentile must be a number.')
        .min(0, "Cat percentile can't be negative.")
        .max(100, "Cat percentile can't be greater than 100."),
      batch_year: Yup.number()
        .integer('Batch year must be an integer.')
        .typeError('Batch year must be an integer.')
        .min(2019, 'Minimum batch year required is 2019.')
        .required('Batch year is required.'),
      passing_year: Yup.number()
        .integer('Passing year must be an integer.')
        .typeError('Passing year must be an integer.')
        .min(2024, 'Minimum passing year required is 2024.')
        .required('Passing is required.'),
      current_year: Yup.number()
        .typeError('Currenr year must be an integer.')
        .required('Current Year is required.')
        .min(1, 'Current Year is required.'),
      gap_12_ug: Yup.number()
        .integer('Gap year must be an integer.')
        .typeError('Gap year must be an integer.')
        .min(0, 'Gap year cannot be negative.')
        .max(4, 'Gap year cannot be greater than 4.'),
      gap_ug_pg: Yup.number().min(0, 'Gap year cannot be negative.'),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })
  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h2 className={styles.title}>College Academic Details</h2>
      <div className={`${styles.field} ${styles.dropdown}`}>
        <Select
          value={formik.values.course}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="course"
          placeholder="Course"
        >
          {courseData.map((datas) => (
            <option key={datas.id}>{datas.value}</option>
          ))}
        </Select>
        {formik.touched.course && formik.errors.course ? (
          <Error errorMessage={formik.errors.course} />
        ) : null}
      </div>
      <div className={`${styles.field} ${styles.dropdown}`}>
        <Select
          value={formik.values.branch}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="branch"
          placeholder="Branch"
        >
          {branchData.map((datas) => (
            <option key={datas.id}>{datas.value}</option>
          ))}
        </Select>
        {formik.touched.branch && formik.errors.branch ? (
          <Error errorMessage={formik.errors.branch} />
        ) : null}
      </div>

      <div className={styles.feild}>
        <Input
          name="batch_year"
          placeholder="Batch Year"
          value={formik.values.batch_year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.batch_year && formik.errors.batch_year ? (
          <Error errorMessage={formik.errors.batch_year} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="passing_year"
          placeholder="Passing Year"
          value={formik.values.passing_year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.passing_year && formik.errors.passing_year ? (
          <Error errorMessage={formik.errors.passing_year} />
        ) : null}
      </div>
      <div className={`${styles.feild} ${styles.dropdown}`}>
        <Select
          value={formik.values.current_year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="current_year"
          placeholder="Current Year"
        >
          {currentYearData.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {formik.touched.current_year && formik.errors.current_year ? (
          <Error errorMessage={formik.errors.current_year} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="cgpi"
          placeholder="CGPI"
          value={formik.values.cgpi}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.cgpi && formik.errors.cgpi ? (
          <Error errorMessage={formik.errors.cgpi} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="active_backlog"
          placeholder="Active Backlog"
          value={formik.values.active_backlog}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.active_backlog && formik.errors.active_backlog ? (
          <Error errorMessage={formik.errors.active_backlog} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="total_backlog"
          placeholder="Total Backlog"
          value={formik.values.total_backlog}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.total_backlog && formik.errors.total_backlog ? (
          <Error errorMessage={formik.errors.total_backlog} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="cat_score"
          placeholder="CAT Percentile"
          value={formik.values.cat_score}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.cat_score && formik.errors.cat_score ? (
          <Error errorMessage={formik.errors.cat_score} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="gate_score"
          placeholder="GATE Score"
          value={formik.values.gate_score}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.gate_score && formik.errors.gate_score ? (
          <Error errorMessage={formik.errors.gate_score} />
        ) : null}
      </div>
      <div className={styles.feild}>
        {formik.values.course === 'B.Tech' ? (
          <>
            <Input
              name="gap_12_ug"
              placeholder="No. of Gap Years after 12th"
              value={formik.values.gap_12_ug}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.gap_12_ug && formik.errors.gap_12_ug ? (
              <Error errorMessage={formik.errors.gap_12_ug} />
            ) : null}
          </>
        ) : null}
      </div>
      <div className={styles.feild}>
        {formik.values.course === 'M.Tech' ||
        formik.values.course === 'MBA' ||
        formik.values.course === 'MSc' ? (
          <>
            <Input
              name="gap_ug_pg"
              placeholder="No. of Gap Years after UG"
              value={formik.values.gap_ug_pg}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.gap_ug_pg && formik.errors.gap_ug_pg ? (
              <Error errorMessage={formik.errors.gap_ug_pg} />
            ) : null}
          </>
        ) : null}
      </div>
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
          type="submit"
        >
          Next
        </Button>
      </div>
    </form>
  )
}
