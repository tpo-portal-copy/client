import { Button, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose, faTrash } from '@fortawesome/free-solid-svg-icons'
import { JNFFormTwoData, JNFFormTwoProps, PlacementJobProfile } from '../../../utils/types'
import coursesData from '../../../utils/Data/coursesData'
import { Input, Select, Error, RadioSelect } from '../../index'
import styles from './Common.module.scss'

export default function JNFFormTwo({ onNext, onBack, data }: JNFFormTwoProps) {
  const [jobProfiles, setJobProfiles] = useState<Array<PlacementJobProfile>>(data)

  const initialValues: JNFFormTwoData = {
    tentativeJoiningDate: '',
    jobProfile: '',
    ctc: undefined,
    jdLink: '',
    cgpi: undefined,
    course: '',
    branch: '',
    hasIntern: '',
    eligibleBatches: [],
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      tentativeJoiningDate: Yup.date().required('Date is required'),
      jobProfile: Yup.string().required('Job profile is required'),
      ctc: Yup.number().required('CTC is required'),
      jdLink: Yup.string().required('Job description is required'),
      cgpi: Yup.number().required('CGPI is required'),
      course: Yup.string().required('Course is required'),
      branch: Yup.string().required('Branch is required'),
      hasIntern: Yup.string().required('This feild is required'),
      eligibleBatches: Yup.array()
        .of(
          Yup.object().shape({
            course: Yup.string().required('Course is required'),
            branchName: Yup.string().required('Branch is required'),
          }),
        )
        .min(1, 'At Least one Branch is required'),
    }),
    onSubmit: () => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleAddProfile()
    },
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
    eligibleBatches,
  }: JNFFormTwoData) => {
    const newProfile = {
      jobProfile,
      ctc,
      jdLink,
      cgpi,
      eligibleBatches,
      tentativeJoiningDate,
      hasIntern,
      jobDescPdf: null,
    }

    const newJobProfiles = [...jobProfiles, newProfile]
    setJobProfiles(newJobProfiles)
    clearForm()
  }

  const handleAddProfile = async () => {
    addJobProfile(formik.values)
  }

  const addBranch = () => {
    if (formik.values.branch.trim() !== '' && formik.values.course.trim() !== '') {
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

  const handleHasInternChange = (hasIntern: string) => {
    formik.setFieldValue('hasIntern', hasIntern)
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
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Placement Details</h2>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.field}>
            <RadioSelect
              name="hasIntern"
              placeholder="Are your offering FTE + Intern"
              value={formik.values.hasIntern}
              onChange={handleHasInternChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.hasIntern && formik.errors.hasIntern ? (
              <Error errorMessage={formik.errors.hasIntern} />
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
      {jobProfiles.length > 0 && (
        <div className={styles.table_container}>
          <Table w="100%">
            <Thead>
              <Tr>
                <Th>Job Profile</Th>
                <Th>CTC Offered</Th>
                <Th>JD Link</Th>
                <Th>Min. CGPI</Th>
                <Th>FTE + Intern</Th>
                <Th>Eligible Branches</Th>
                <Th>Tentative Joining Date</Th>
                <Th>Delete Profile</Th>
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
                          <li key={`${batch.course}: ${batch.branchName}`}>
                            {`${batch.course}: ${batch.branchName}`}
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
          isDisabled={jobProfiles.length <= 0}
        >
          Next
        </Button>
      </div>
    </>
  )
}
