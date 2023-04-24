import { Button, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  EligibleBranch,
  JNFFormTwoData,
  JNFFormTwoProps,
  PlacementJobProfile,
} from '../../../../utils/types'
import coursesData from '../../../../utils/Data/coursesData'
import styles from './JNFFormTwo.module.scss'
import { Input, Select, Error, RadioSelect } from '../../../index'
import { BooleanValue } from '../../../../utils/constants'

export default function JNFFormTwo({ onNext, onBack, data }: JNFFormTwoProps) {
  const [jobProfiles, setJobProfiles] = useState<Array<PlacementJobProfile>>(data)
  const [eligibleBatches, setEligibleBatches] = useState<Array<EligibleBranch>>([])

  const formik = useFormik({
    initialValues: {
      tentativeJoiningDate: '',
      jobProfile: '',
      ctc: undefined,
      jdLink: '',
      cgpi: undefined,
      eligibleBatches: '',
      course: '',
      branch: '',
      hasIntern: false,
    },
    validationSchema: Yup.object().shape({
      tentativeJoiningDate: Yup.date().required('Date is required'),
      jobProfile: Yup.string().required('job profile is required'),
      ctc: Yup.number().required(),
      jdLink: Yup.string().required('job description is required'),
      cgpi: Yup.number().required(),
      eligibleBatches: Yup.string(),
      course: Yup.string().required('Course is required'),
      branch: Yup.string().required('Branch is required'),
      hasIntern: Yup.bool(),
    }),
    onSubmit: () => {},
  })

  const clearForm = () => {
    formik.resetForm()
  }

  const addJobProfile = async ({
    jobProfile,
    ctc,
    jdLink,
    tentativeJoiningDate,
    cgpi,
    hasIntern,
  }: JNFFormTwoData) => {
    const newProfile = {
      jobProfile,
      ctc,
      jdLink,
      cgpi,
      eligibleBatches,
      tentativeJoiningDate,
      hasIntern,
    }

    const newJobProfiles = [...jobProfiles, newProfile]
    setJobProfiles(newJobProfiles)
    clearForm()
  }

  const handleAddProfile = () => {
    addJobProfile(formik.values)
  }

  const uniqueList = eligibleBatches.filter(
    (item, index, self) =>
      index ===
      self.findIndex((t) => t.branch_name === item.branch_name && t.course === item.course),
  )

  const addBranch = () => {
    if (formik.values.branch.trim() !== '' && formik.values.course.trim() !== '') {
      setEligibleBatches([
        ...uniqueList,
        {
          course: formik.values.course,
          branch_name: formik.values.branch,
        },
      ])
    }
  }

  const removeBranch = (index: number) => {
    const list = [...uniqueList]
    list.splice(index, 1)
    setEligibleBatches(list)
  }

  const handleHasInternChange = (hasIntern: string) => {
    const isInternOffered = hasIntern === BooleanValue.TRUE
    formik.setFieldValue('hasIntern', isInternOffered)
  }

  const handleFormSubmit = () => {
    onNext(jobProfiles)
  }

  const handleFormBack = () => {
    onBack(jobProfiles)
  }

  const deleteJobProfile = (index: number) => {
    const newJobProfiles = [...jobProfiles]
    newJobProfiles.splice(index, 1)
    setJobProfiles(newJobProfiles)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Placement Details</h2>
      <form className={styles.form}>
        <div className={styles.field}>
          <RadioSelect
            name="hasIntern"
            placeholder="Are your offering FTE + Intern"
            value={formik.values.hasIntern ? BooleanValue.TRUE : BooleanValue.FALSE}
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
            type="number"
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
            name="jdLink"
            placeholder="Job Description Link"
            value={formik.values.jdLink}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.jdLink && formik.errors.jdLink ? (
            <Error errorMessage={formik.errors.jdLink} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="cgpi"
            placeholder="CGPI"
            type="number"
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

          <Button onClick={addBranch} className={styles.add_btn} marginTop="4">
            <FontAwesomeIcon icon={faPlus} /> Add Branch
          </Button>
          <div className={styles.selected_branches_row}>
            {uniqueList.map((batches, idx: number) => (
              <Tag className={styles.selected_branches} key={batches.branch_name}>
                {batches.course} {batches.branch_name}
                <Button size="xs" onClick={() => removeBranch(idx)}>
                  <FontAwesomeIcon icon={faClose} />
                </Button>
              </Tag>
            ))}
          </div>
        </div>
        <div className={styles.confirm_btn}>
          <Button
            onClick={handleAddProfile}
            isDisabled={!formik.isValid}
            className={styles.add_btn}
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Add Profile</span>
          </Button>
          <Button onClick={clearForm}>Clear Form</Button>
        </div>
        <Table w="100%" className={styles.table_container}>
          <Thead>
            <Tr>
              <Th>Job Profile</Th>
              <Th>CTC Offered</Th>
              <Th>JD Link</Th>
              <Th>Min. CGPI</Th>
              <Th>FTE + Intern</Th>
              <Th>Eligible Branches</Th>
              <Th>Tentative Joining Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {jobProfiles.map((jobProfile: PlacementJobProfile, index) => {
              return (
                <Tr key={jobProfile.jobProfile}>
                  <Td>{jobProfile.jobProfile}</Td>
                  <Td>{jobProfile.ctc}</Td>
                  <Td>{jobProfile.jdLink}</Td>
                  <Td>{jobProfile.cgpi}</Td>
                  <Td>{jobProfile.hasIntern ? 'Yes' : ' No'}</Td>
                  <Td>
                    {jobProfile.eligibleBatches.map((batch: any) => {
                      return (
                        <li key={`${batch.course}: ${batch.branch_name}`}>
                          {`${batch.course}: ${batch.branch_name}`}
                        </li>
                      )
                    })}
                  </Td>
                  <Td>{jobProfile.tentativeJoiningDate}</Td>
                  <Td>
                    <Button onClick={() => deleteJobProfile(index)}>
                      <FontAwesomeIcon icon={faTrash} color="#E64848" />
                    </Button>
                  </Td>
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
            onClick={handleFormBack}
          >
            Back
          </Button>
          <Button
            background="linear-gradient(40deg,#45cafc,#303f9f)"
            color="white"
            _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
            className={styles.btn}
            onClick={handleFormSubmit}
            isDisabled={jobProfiles.length <= 0}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}
