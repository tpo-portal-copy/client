import { Button, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { FormikState, useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { EligibleBranch, JNFFormTwoData, JNFFormTwoProps } from '../../../../utils/types'
import coursesData from '../../../../utils/Data/coursesData'
import styles from './JNFFormTwo.module.scss'
import { Input, Select, Error, RadioSelect } from '../../../index'

export default function JNFFormTwo({ onNext, onBack, data }: JNFFormTwoProps) {
  const [jobProfiles, setJobProfiles] = useState<Array<object>>([])

  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      tentativeJoiningDate: Yup.date().required('Date is required'),
      jobProfile: Yup.string().required('job profile is required'),
      ctc: Yup.number().required(),
      jobDescription: Yup.string().required('job description is required'),
      cgpi: Yup.string().required(),
      eligibleBatches: Yup.string(),
      course: Yup.string().required('Course is required'),
      branch: Yup.string().required('Branch is required'),
      hasIntern: Yup.bool(),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })

  const [eligibleBatches, setEligibleBatches] = useState<Array<EligibleBranch>>([])

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
  }

  const removeBranch = (index: number) => {
    const list = [...uniqueList]
    list.splice(index, 1)
    setEligibleBatches(list)
  }

  const clearForm = () => {
    const initialValues: JNFFormTwoData = {
      tentativeJoiningDate: '',
      jobProfile: '',
      ctc: undefined,
      jobDescription: '',
      cgpi: undefined,
      eligibleBatches: '',
      course: '',
      branch: '',
      hasIntern: false,
    }

    const formikState: FormikState<JNFFormTwoData> = {
      values: initialValues,
      touched: {},
      errors: {},
      isSubmitting: false,
      isValidating: false,
      submitCount: 0,
    }

    formik.setFormikState(formikState)
    setEligibleBatches([])
  }

  const addJobProfile = async () => {
    const res = await formik.validateForm()

    if (Object.values(res).length > 0) return

    const newProfile = {
      jobProfile: formik.values.jobProfile,
      ctc: formik.values.ctc,
      jdLink: formik.values.jobDescription,
      cgpi: formik.values.cgpi,
      eligibleBatches,
      tentativeJoiningDate: formik.values.tentativeJoiningDate,
    }

    const newJobProfiles = [...jobProfiles, newProfile]
    setJobProfiles(newJobProfiles)
    clearForm()
  }

  const handleHasInternChange = (hasIntern: string) => {
    const isInternOffered = hasIntern === 'true'
    formik.setFieldValue('hasIntern', isInternOffered)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Placement Details</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.field}>
          <RadioSelect
            name="hasIntern"
            placeholder="Are your offering FTE + Intern"
            value={formik.values.hasIntern ? 'true' : 'false'}
            onChange={handleHasInternChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tentativeJoiningDate && formik.errors.tentativeJoiningDate ? (
            <Error errorMessage={formik.errors.tentativeJoiningDate} />
          ) : null}
        </div>
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
            {uniqueList.map((batches, idx: number) => (
              <Tag className={styles.selected_branches} key={batches.branch_name}>
                {batches.course_name} {batches.branch_name}
                <Button size="xs" onClick={() => removeBranch(idx)}>
                  <FontAwesomeIcon icon={faClose} />
                </Button>
              </Tag>
            ))}
          </div>
        </div>
        <div className={styles.confirm_btn}>
          <Button onClick={addJobProfile} isDisabled={!formik.isValid}>
            <FontAwesomeIcon icon={faCheck} color="#54B435" />
          </Button>
          <Button onClick={clearForm}>
            <FontAwesomeIcon icon={faTrash} color="#E64848" />
          </Button>
        </div>
        <Table w="100%" className={styles.table_container}>
          <Thead>
            <Tr>
              <Th>Job Profile</Th>
              <Th>CTC Offered</Th>
              <Th>JD Link</Th>
              <Th>Min. CGPI</Th>
              <Th>Eligible Branches</Th>
              <Th>Tentative Joining Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {jobProfiles.map((jobProfile: any) => {
              return (
                <Tr key={jobProfile.jobProfile}>
                  <Td>{jobProfile.jobProfile}</Td>
                  <Td>{jobProfile.ctc}</Td>
                  <Td>{jobProfile.jdLink}</Td>
                  <Td>{jobProfile.cgpi}</Td>
                  <Td>
                    {jobProfile.eligibleBatches.map((batch: any) => {
                      return (
                        <li key={`${batch.course_name}: ${batch.branch_name}`}>
                          {`${batch.course_name}: ${batch.branch_name}`}
                        </li>
                      )
                    })}
                  </Td>
                  <Td>{jobProfile.tentativeJoiningDate}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
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
