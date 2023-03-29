import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormThreeProps } from '../../../../utils/types'
import styles from './FormThree.module.scss'
import { Error, Input, Select } from '../../../index'
import useCourses from '../../../../hooks/useCourses'
import { branchesAPI } from '../../../../utils/apis'

export default function FormThree({ onNext, onBack, data }: FormThreeProps) {
  const { data: coursesData, isSuccess: isCoursesSuccess } = useCourses()
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      course: Yup.string().required('Course is required.'),
      branch_write: Yup.string().required('Branch is required.'),
      cgpi: Yup.number()
        .min(0, 'CGPI must be greater than or equal to 0.')
        .max(10, 'CGPI must be less than or equal to 10.')
        .typeError('CGPI must be a number.')
        .required('CGPI is required.'),
      active_backlog: Yup.number()
        .integer('Active backlog must be an integer.')
        .typeError('Active backlog must be an integer.')
        .required('Active backlog is required.')
        .min(0, 'Active backlog must be greater than or equal to 0.'),
      total_backlog: Yup.number()
        .integer('Total backlog must be an integer.')
        .typeError('Total backlog must be an integer.')
        .required('Total backlog is required.')
        .min(0, 'Total backlog must be greater than or equal to 0.'),
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
        .required('Passing year is required.'),
      current_year: Yup.string()
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

  const [branch, setBranch] = useState<any>([])
  const [course, setCourse] = useState<any>({})

  const handleCourseChange = async (e: any) => {
    const parsedObj = JSON.parse(e.target.value)
    setCourse(parsedObj)

    formik.setFieldValue('course', e.target.value)
    const passingYear =
      parsedObj.years == null || formik.values.batch_year == null
        ? null
        : parsedObj.years + formik.values.batch_year
    formik.setFieldValue('passing_year', parseInt(passingYear, 10))
    const res = await branchesAPI.get(`/${parsedObj.id}`)
    setBranch(res.data)
  }

  const handleBranchChange = (e: any) => {
    formik.setFieldValue('branch_write', e.target.value)
  }

  const getCourseType = (courseName: string) => {
    if (
      courseName === 'M.Tech' ||
      courseName === 'M.Arch' ||
      courseName === 'MBA' ||
      courseName === 'M.Sc.' ||
      courseName === 'Ph.D.'
    )
      return 'PG'

    if (courseName === 'B.Tech' || courseName === 'Dual Degree' || courseName === 'B.Arch')
      return 'UG'

    return null
  }

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h2 className={styles.title}>College Academic Details</h2>
      <div className={styles.field}>
        {isCoursesSuccess && (
          <Select
            value={formik.values.course}
            onChange={(e) => handleCourseChange(e)}
            onBlur={formik.handleBlur}
            name="course"
            placeholder="Course"
          >
            {coursesData.map((datas: any) => (
              <option
                value={`{"id":${datas.id},"years":${datas.years},"name":"${datas.name}"}`}
                key={datas.id}
              >
                {datas.name}
              </option>
            ))}
          </Select>
        )}
        {formik.touched.course && formik.errors.course ? (
          <Error errorMessage={formik.errors.course} />
        ) : null}
      </div>
      <div className={styles.field}>
        <Select
          value={formik.values.branch_write}
          onChange={(e) => handleBranchChange(e)}
          onBlur={formik.handleBlur}
          name="branch_write"
          placeholder="Branch"
        >
          {branch.length !== 0 &&
            branch.branches.map((datas: any) => (
              <option value={datas.id} key={datas.id}>
                {datas.branch_name}
              </option>
            ))}
        </Select>
        {formik.touched.branch_write && formik.errors.branch_write ? (
          <Error errorMessage={formik.errors.branch_write} />
        ) : null}
      </div>

      <div className={styles.field}>
        <Input
          name="batch_year"
          placeholder="Batch Year"
          type="number"
          value={formik.values.batch_year}
          onChange={(e) => {
            formik.setFieldValue('batch_year', parseInt(e.target.value, 10))
            const passingYear =
              course.years == null || formik.values.batch_year == null
                ? parseInt(e.target.value, 10)
                : parseInt(e.target.value, 10) + course.years
            formik.setFieldValue('passing_year', parseInt(passingYear, 10))
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.batch_year && formik.errors.batch_year ? (
          <Error errorMessage={formik.errors.batch_year} />
        ) : null}
      </div>
      <div className={styles.field}>
        <Input
          name="passing_year"
          placeholder="Passing Year"
          type="number"
          value={formik.values.passing_year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isDisabled
        />
        {formik.touched.passing_year && formik.errors.passing_year ? (
          <Error errorMessage={formik.errors.passing_year} />
        ) : null}
      </div>
      <div className={styles.field}>
        <Select
          value={formik.values.current_year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="current_year"
          placeholder="Current Year"
        >
          {Array(course.years)
            .fill(1)
            .map((val, idx) => {
              return (
                <option key={`${idx + 1}${val}`} value={idx + 1}>
                  {idx + 1}
                </option>
              )
            })}
        </Select>
        {formik.touched.current_year && formik.errors.current_year ? (
          <Error errorMessage={formik.errors.current_year} />
        ) : null}
      </div>
      <div className={styles.field}>
        <Input
          name="cgpi"
          placeholder="CGPI"
          type="number"
          value={formik.values.cgpi}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.cgpi && formik.errors.cgpi ? (
          <Error errorMessage={formik.errors.cgpi} />
        ) : null}
      </div>
      <div className={styles.field}>
        <Input
          name="active_backlog"
          placeholder="Active Backlog"
          type="number"
          value={formik.values.active_backlog}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.active_backlog && formik.errors.active_backlog ? (
          <Error errorMessage={formik.errors.active_backlog} />
        ) : null}
      </div>
      <div className={styles.field}>
        <Input
          name="total_backlog"
          placeholder="Total Backlog"
          type="number"
          value={formik.values.total_backlog}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.total_backlog && formik.errors.total_backlog ? (
          <Error errorMessage={formik.errors.total_backlog} />
        ) : null}
      </div>
      <div className={styles.field}>
        <Input
          name="cat_score"
          placeholder="CAT Percentile"
          type="number"
          value={formik.values.cat_score}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.cat_score && formik.errors.cat_score ? (
          <Error errorMessage={formik.errors.cat_score} />
        ) : null}
      </div>
      <div className={styles.field}>
        <Input
          name="gate_score"
          placeholder="GATE Score"
          type="number"
          value={formik.values.gate_score}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.gate_score && formik.errors.gate_score ? (
          <Error errorMessage={formik.errors.gate_score} />
        ) : null}
      </div>
      <div className={styles.field}>
        {getCourseType(course.name) === 'UG' ? (
          <>
            <Input
              name="gap_12_ug"
              type="number"
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
      <div className={styles.field}>
        {getCourseType(course.name) === 'PG' ? (
          <>
            <Input
              name="gap_ug_pg"
              placeholder="No. of Gap Years after UG"
              type="number"
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
