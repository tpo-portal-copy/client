/* eslint-disable eqeqeq */
import { VStack, Text, Alert, AlertIcon, Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormThreeProps } from '../../../../utils/types'
import styles from './FormThree.module.scss'
import { Input, Select } from '../../../index'

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
  { id: 1, value: 'I' },
  { id: 2, value: 'II' },
  { id: 3, value: 'III' },
  { id: 4, value: 'IV' },
  { id: 5, value: 'V' },
]

export default function FormThree({ onNext, onBack, data }: FormThreeProps) {
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      course: Yup.string().required('*Required'),
      branch: Yup.string().required('*Required'),
      cgpi: Yup.number().typeError('Should be integer').required('*Required'),
      activeBacklog: Yup.number().typeError('Should be integer').required('*Required'),
      totalBacklog: Yup.number().typeError('Should be integer').required('*Required'),
      gateScore: Yup.number().typeError('Should be number'),
      catScore: Yup.number().typeError('Should be number'),
      batchYear: Yup.string()
        .min(4, 'Invalid Year')
        .max(4, 'Invalid Year')
        .matches(/^[0-9]+$/, 'Only integers are allowed')
        .required('*Required'),
      passingYear: Yup.string()
        .min(4, 'Invalid Year')
        .max(4, 'Invalid Year')
        .matches(/^[0-9]+$/, 'Only integers are allowed')
        .required('*Required'),
      currentYear: Yup.string().required('*Required'),
      gapYear12: Yup.number(),
      gapYearUG: Yup.number(),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })
  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <VStack>
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
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.course}
          </Alert>
        ) : null}

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
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.branch}
          </Alert>
        ) : null}

        <Input
          name="batchYear"
          placeholder="Batch Year"
          value={formik.values.batchYear || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.batchYear && formik.errors.batchYear ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.batchYear}
          </Alert>
        ) : null}

        <Input
          name="passingYear"
          placeholder="Passing Year"
          value={formik.values.passingYear || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.passingYear && formik.errors.passingYear ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.passingYear}
          </Alert>
        ) : null}

        <Select
          value={formik.values.currentYear}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="currentYear"
          placeholder="Current Year"
        >
          {currentYearData.map((datas) => (
            <option key={datas.id}>{datas.value}</option>
          ))}
        </Select>
        {formik.touched.currentYear && formik.errors.currentYear ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.currentYear}
          </Alert>
        ) : null}

        <Input
          name="cgpi"
          placeholder="CGPI"
          value={formik.values.cgpi || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.cgpi && formik.errors.cgpi ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.cgpi}
          </Alert>
        ) : null}

        <Input
          name="activeBacklog"
          placeholder="Active Backlog"
          value={formik.values.activeBacklog || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.activeBacklog && formik.errors.activeBacklog ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.activeBacklog}
          </Alert>
        ) : null}

        <Input
          name="totalBacklog"
          placeholder="Total Backlog"
          value={formik.values.totalBacklog || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.totalBacklog && formik.errors.totalBacklog ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.totalBacklog}
          </Alert>
        ) : null}

        <Input
          name="catScore"
          placeholder="CAT Score"
          value={formik.values.catScore || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.catScore && formik.errors.catScore ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.catScore}
          </Alert>
        ) : null}

        <Input
          name="gateScore"
          placeholder="GATE Score"
          value={formik.values.gateScore || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.gateScore && formik.errors.gateScore ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.gateScore}
          </Alert>
        ) : null}

        {formik.values.course == 'B.Tech' ? (
          <Input
            name="gapYear12"
            placeholder="Gap Year after 12th"
            value={formik.values.gapYear12 || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ) : null}

        {formik.values.course == 'M.Tech' ||
        formik.values.course == 'MBA' ||
        formik.values.course == 'MSc' ? (
          <Input
            name="gapYearUG"
            placeholder="Gap Year after UG"
            value={formik.values.gapYearUG || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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
