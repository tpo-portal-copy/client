import { Button, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose, faTrash } from '@fortawesome/free-solid-svg-icons'
import { JNFFormFourData, JNFFormFourProps, SixMonInternJobProfile } from '../../../utils/types'
import coursesData from '../../../utils/Data/coursesData'
import { Input, Select, Error } from '../../index'
import styles from './Common.module.scss'

export default function JNFFormFour({ onNext, onBack, data }: JNFFormFourProps) {
  const [sixMonInternJobProfiles, setSixMonInternJobProfiles] =
    useState<Array<SixMonInternJobProfile>>(data)

  const initialValues: JNFFormFourData = {
    tentativeJoiningDate: '',
    jobProfile: '',
    stipend: undefined,
    ctcAfterIntern: undefined,
    jdLink: '',
    cgpi: undefined,
    eligibleBatches: [],
    course: '',
    branch: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      tentativeJoiningDate: Yup.date().required('Date is required'),
      jobProfile: Yup.string().required('job profile is required'),
      stipend: Yup.number().required(),
      ctcAfterIntern: Yup.number().required(),
      jdLink: Yup.string().required('job description is required'),
      cgpi: Yup.string().required(),
      course: Yup.string().required('Course is required'),
      branch: Yup.string().required('Branch is required'),
      eligibleBatches: Yup.array()
        .of(
          Yup.object().shape({
            course: Yup.string().required('Course is required'),
            branchName: Yup.string().required('Branch is required'),
          }),
        )
        .min(1, 'At Least one Branch is required'),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      addJobProfile(values)
    },
  })

  const addBranch = () => {
    if (formik.values.branch !== '' && formik.values.course !== '') {
      const { eligibleBatches } = formik.values
      const eligibleBatch = eligibleBatches.find(
        (item) => item.branchName === formik.values.branch && item.course === formik.values.course,
      )

      // Return if already present
      if (eligibleBatch) return

      const newBatches = [
        ...eligibleBatches,
        {
          course: formik.values.course,
          branchName: formik.values.branch,
        },
      ]

      formik.setFieldValue('eligibleBatches', newBatches)
    }
  }

  const removeBranch = (index: number) => {
    const list = [...formik.values.eligibleBatches]
    list.splice(index, 1)
    formik.setFieldValue('eligibleBatches', list)
  }

  const clearForm = () => {
    formik.resetForm()
  }

  const addJobProfile = async ({
    jobProfile,
    stipend,
    cgpi,
    ctcAfterIntern,
    jdLink,
    tentativeJoiningDate,
    eligibleBatches,
  }: JNFFormFourData) => {
    const newProfile = {
      jobProfile,
      stipend,
      ctcAfterIntern,
      jdLink,
      cgpi,
      eligibleBatches,
      tentativeJoiningDate,
      jobDescPdf: null,
    }

    const newJobProfiles = [...sixMonInternJobProfiles, newProfile]
    setSixMonInternJobProfiles(newJobProfiles)
    clearForm()
  }

  const handleFormSubmit = () => {
    onNext(sixMonInternJobProfiles)
  }

  const handleFormBack = () => {
    onBack(sixMonInternJobProfiles)
  }

  const deleteJobProfile = (index: number) => {
    const newJobProfiles = [...sixMonInternJobProfiles]
    newJobProfiles.splice(index, 1)
    setSixMonInternJobProfiles(newJobProfiles)
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>6 Months Intern Details</h2>
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
              name="stipend"
              type="number"
              placeholder="Stipend Offered"
              value={formik.values.stipend || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.stipend && formik.errors.stipend ? (
              <Error errorMessage={formik.errors.stipend} />
            ) : null}
          </div>
          <div className={styles.field}>
            <Input
              name="ctcAfterIntern"
              type="number"
              placeholder="CTC Offered After Intern"
              value={formik.values.ctcAfterIntern || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.ctcAfterIntern && formik.errors.ctcAfterIntern ? (
              <Error errorMessage={formik.errors.ctcAfterIntern} />
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
              {formik.values.eligibleBatches.map((batch, idx: number) => (
                <Tag
                  key={batch.branchName}
                  display="flex"
                  backgroundColor="blue.700"
                  color="white"
                  paddingLeft="3"
                  paddingY="1"
                  borderRadius="2xl"
                  fontSize="xs"
                >
                  {batch.course} {batch.branchName}
                  <Button
                    size="xs"
                    onClick={() => removeBranch(idx)}
                    backgroundColor="transparent"
                    _hover={{ backgroundColor: 'blue.700' }}
                  >
                    <FontAwesomeIcon icon={faClose} color="white" />
                  </Button>
                </Tag>
              ))}
            </div>
          </div>
          <div className={styles.confirm_btn}>
            <Button type="submit" isDisabled={!formik.isValid} className={styles.add_btn}>
              <FontAwesomeIcon icon={faPlus} />
              <span>Add Profile</span>
            </Button>
            <Button onClick={clearForm}>Clear Form</Button>
          </div>
        </form>
      </div>
      {sixMonInternJobProfiles.length > 0 && (
        <div className={styles.table_container}>
          <Table w="100%">
            <Thead>
              <Tr>
                <Th>Job Profile</Th>
                <Th>Stipend</Th>
                <Th>CTC Offered After PPO</Th>
                <Th>JD Link</Th>
                <Th>Min. CGPI</Th>
                <Th>Eligible Branches</Th>
                <Th>Tentative Joining Date</Th>
                <Th>Delete Profile</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sixMonInternJobProfiles.map((jobProfile: SixMonInternJobProfile, index) => {
                return (
                  <Tr key={jobProfile.jobProfile}>
                    <Td>{jobProfile.jobProfile}</Td>
                    <Td>{jobProfile.stipend}</Td>
                    <Td>{jobProfile.ctcAfterIntern}</Td>
                    <Td>{jobProfile.jdLink}</Td>
                    <Td>{jobProfile.cgpi}</Td>
                    <Td>
                      {jobProfile.eligibleBatches.map((batch: any) => {
                        return (
                          <li key={`${batch.course}: ${batch.branch}`}>
                            {`${batch.course}: ${batch.branch}`}
                          </li>
                        )
                      })}
                    </Td>
                    <Td>{jobProfile.tentativeJoiningDate}</Td>
                    <Td>
                      <Button
                        onClick={() => deleteJobProfile(index)}
                        backgroundColor="transparent"
                        _hover={{ backgroundColor: 'white' }}
                      >
                        <FontAwesomeIcon icon={faTrash} color="#E64848" />
                      </Button>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </div>
      )}
      <div className={styles.btn_container}>
        <Button className={styles.btn} onClick={handleFormBack}>
          Back
        </Button>
        <Button
          className={styles.btn}
          onClick={handleFormSubmit}
          isDisabled={sixMonInternJobProfiles.length <= 0}
        >
          Next
        </Button>
      </div>
    </>
  )
}
