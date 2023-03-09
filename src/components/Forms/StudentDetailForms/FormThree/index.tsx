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
      activeBacklog: Yup.number()
        .integer('Active backlog must be an integer.')
        .typeError('Active backlog must be an integer.')
        .required('Active backlog is required.'),
      totalBacklog: Yup.number()
        .integer('Total backlog must be an integer.')
        .typeError('Total backlog must be an integer.')
        .required('Total backlog is required.'),
      gateScore: Yup.number().typeError('Gate score must be a number.'),
      catScore: Yup.number().typeError('Cat score must be a number.'),
      batchYear: Yup.number()
        .integer('Batch year must be an integer.')
        .typeError('Batch year must be an integer.')
        .min(2019, 'Minimum batch year required is 2019.')
        .required('Batch year is required.'),
      passingYear: Yup.number()
        .integer('Passing year must be an integer.')
        .typeError('Passing year must be an integer.')
        .min(2024, 'Minimum passing year required is 2024.')
        .required('Passing is required.'),
      currentYear: Yup.number()
        .typeError('Currenr year must be an integer.')
        .required('Current Year is required.')
        .min(1, 'Current Year is required.'),
      gapYear12: Yup.number()
        .integer('Gap year must be an integer.')
        .typeError('Gap year must be an integer.')
        .max(4, 'Gap year cannot be greater than 4.')
        .min(0, 'Gap year cannot be negative.'),
      gapYearUG: Yup.number().min(0, 'Gap year cannot be negative.'),
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
          name="batchYear"
          placeholder="Batch Year"
          value={formik.values.batchYear}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.batchYear && formik.errors.batchYear ? (
          <Error errorMessage={formik.errors.batchYear} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="passingYear"
          placeholder="Passing Year"
          value={formik.values.passingYear}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.passingYear && formik.errors.passingYear ? (
          <Error errorMessage={formik.errors.passingYear} />
        ) : null}
      </div>
      <div className={`${styles.feild} ${styles.dropdown}`}>
        <Select
          value={formik.values.currentYear}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="currentYear"
          placeholder="Current Year"
        >
          {currentYearData.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {formik.touched.currentYear && formik.errors.currentYear ? (
          <Error errorMessage={formik.errors.currentYear} />
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
          name="activeBacklog"
          placeholder="Active Backlog"
          value={formik.values.activeBacklog}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.activeBacklog && formik.errors.activeBacklog ? (
          <Error errorMessage={formik.errors.activeBacklog} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="totalBacklog"
          placeholder="Total Backlog"
          value={formik.values.totalBacklog}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.totalBacklog && formik.errors.totalBacklog ? (
          <Error errorMessage={formik.errors.totalBacklog} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="catScore"
          placeholder="CAT Score"
          value={formik.values.catScore}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.catScore && formik.errors.catScore ? (
          <Error errorMessage={formik.errors.catScore} />
        ) : null}
      </div>
      <div className={styles.feild}>
        <Input
          name="gateScore"
          placeholder="GATE Score"
          value={formik.values.gateScore}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.gateScore && formik.errors.gateScore ? (
          <Error errorMessage={formik.errors.gateScore} />
        ) : null}
      </div>
      <div className={styles.feild}>
        {formik.values.course === 'B.Tech' ? (
          <Input
            name="gapYear12"
            placeholder="Gap Year after 12th"
            value={formik.values.gapYear12}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ) : null}
      </div>
      <div className={styles.feild}>
        {formik.values.course === 'M.Tech' ||
        formik.values.course === 'MBA' ||
        formik.values.course === 'MSc' ? (
          <Input
            name="gapYearUG"
            placeholder="Gap Year after UG"
            value={formik.values.gapYearUG}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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
