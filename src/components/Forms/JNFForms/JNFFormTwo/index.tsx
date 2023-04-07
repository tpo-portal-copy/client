import { Button, Tag } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose } from '@fortawesome/free-solid-svg-icons'
import { JNFFormTwoProps } from '../../../../utils/types'
import coursesData from '../../../../utils/Data/coursesData'
import styles from './JNFFormTwo.module.scss'
import { Input, Select, Error } from '../../../index'

export default function JNFFormTwo({ onNext, onBack, data }: JNFFormTwoProps) {
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      tentativeJoiningDate: Yup.date().required('Date is required'),
      jobProfile: Yup.string().required('job profile is required'),
      ctc: Yup.number().required(),
      jobDescription: Yup.string().required('job description is required'),
      cgpi: Yup.number().required(),
      eligibleBatches: Yup.string(),
      course: Yup.string().required('Course is required'),
      branch: Yup.string().required('Branch is required'),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })

  const [eligibleBatches, setEligibleBatches] = useState([
    {
      course_name: '',
      branch_name: '',
    },
  ])

  const uniqueList = eligibleBatches.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (t) => t.branch_name === item.branch_name && t.course_name === item.course_name,
      ),
  )

  const addBranch = () => {
    if (formik.values.branch !== '' && formik.values.course !== '') {
      setEligibleBatches([
        ...uniqueList,
        {
          branch_name: formik.values.branch,
          course_name: formik.values.course,
        },
      ])
    }
    formik.setFieldValue('', '')
  }

  const removeBranch = (index: number) => {
    const list = [...uniqueList]
    list.splice(index, 1)
    setEligibleBatches(list)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Placement Details</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.field}>
          <Input
            name="tentativeJoiningDate"
            type="date"
            placeholder="Tentative Joining Date"
            value={formik.values.tentativeJoiningDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tentativeJoiningDate && formik.errors.tentativeJoiningDate ? (
            <Error errorMessage={formik.errors.tentativeJoiningDate} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="jobProfile"
            placeholder="Job Profile"
            value={formik.values.jobProfile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.jobProfile && formik.errors.jobProfile ? (
            <Error errorMessage={formik.errors.jobProfile} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="ctc"
            placeholder="CTC Offered"
            value={formik.values.ctc || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ctc && formik.errors.ctc ? (
            <Error errorMessage={formik.errors.ctc} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="jobDescription"
            placeholder="Job Description (JD) LINK"
            value={formik.values.jobDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.jobDescription && formik.errors.jobDescription ? (
            <Error errorMessage={formik.errors.jobDescription} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="cgpi"
            placeholder="CGPI"
            value={formik.values.cgpi || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cgpi && formik.errors.cgpi ? (
            <Error errorMessage={formik.errors.cgpi} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Select
            value={formik.values.course}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="course"
            placeholder="Eligible Courses"
          >
            {coursesData.map((cour) => (
              <option key={cour.id}>{cour.courseName}</option>
            ))}
          </Select>

          <Select
            value={formik.values.branch}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="branch"
            placeholder="Eligible Branches"
          >
            {coursesData
              .filter((cour) => cour.courseName === formik.values.course)
              .map((cour) =>
                cour.batches.map((batch) => <option key={batch.id}>{batch.batchName}</option>),
              )}
          </Select>
          {formik.touched.eligibleBatches && formik.errors.eligibleBatches ? (
            <Error errorMessage={formik.errors.eligibleBatches} />
          ) : null}

          <Button onClick={addBranch} className={styles.add_branches}>
            <FontAwesomeIcon icon={faPlus} /> Add Branch
          </Button>
          <div className={styles.selected_branches_row}>
            {uniqueList.slice(1).map((batches, idx: number) => (
              <Tag className={styles.selected_branches} key={batches.branch_name}>
                {batches.course_name} {batches.branch_name}
                <Button size="xs" onClick={() => removeBranch(idx + 1)}>
                  <FontAwesomeIcon icon={faClose} />
                </Button>
              </Tag>
            ))}
          </div>
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
            isDisabled={!formik.isValid}
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}
