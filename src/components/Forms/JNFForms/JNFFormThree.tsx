import { Button, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose, faTrash } from '@fortawesome/free-solid-svg-icons'
import { JNFFormThreeData, JNFFormThreeProps, SummerInternJobProfile } from '../../../utils/types'
import coursesData from '../../../utils/Data/coursesData'
import { Input, RadioSelect, Select, Error } from '../../index'
import { BooleanValue } from '../../../utils/constants'
import styles from './Common.module.scss'

export default function JNFFormThree({ onNext, onBack, data }: JNFFormThreeProps) {
  const [summerInternJobProfiles, setSummerInternJobProfiles] =
    useState<Array<SummerInternJobProfile>>(data)

  const initialValues: JNFFormThreeData = {
    hasPPO: '',
    tentativeJoiningDate: '',
    jobProfile: '',
    stipend: undefined,
    duration: undefined,
    ctcAfterPpo: undefined,
    jdLink: '',
    cgpi: undefined,
    eligibleBatches: [],
    course: '',
    branch: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      hasPPO: Yup.string(),
      tentativeJoiningDate: Yup.string().required('Starting Date is required'),
      jobProfile: Yup.string().required('Job profile required'),
      stipend: Yup.number().required('Stipend is required'),
      duration: Yup.number().required('Duration is required'),
      ctcAfterPpo: Yup.number(),
      jdLink: Yup.string().required('JD Link is required'),
      cgpi: Yup.number().required('CGPI is required'),
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
      /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
      addJobProfile(values)
    },
  })

  const clearForm = () => {
    formik.resetForm()
  }

  const addJobProfile = async ({
    jobProfile,
    stipend,
    duration,
    jdLink,
    ctcAfterPpo,
    hasPPO,
    eligibleBatches,
    tentativeJoiningDate,
    cgpi,
  }: JNFFormThreeData) => {
    const newProfile = {
      jobProfile,
      stipend,
      duration,
      jdLink,
      cgpi,
      eligibleBatches,
      tentativeJoiningDate,
      ctcAfterPpo,
      hasPPO,
      jobDescPdf: null,
    }

    const newInternProfiles = [...summerInternJobProfiles, newProfile]
    setSummerInternJobProfiles(newInternProfiles)
    clearForm()
  }

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

  const handleIsPPOButton = (value: string) => {
    formik.setFieldValue('hasPPO', value)
  }

  const handleFormSubmit = () => {
    onNext(summerInternJobProfiles)
  }

  const handleFormBack = () => {
    onBack(summerInternJobProfiles)
  }

  const deleteJobProfile = (index: number) => {
    const newJobProfiles = [...summerInternJobProfiles]
    newJobProfiles.splice(index, 1)
    setSummerInternJobProfiles(newJobProfiles)
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Intern Details</h2>
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
              value={formik.values.stipend}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.stipend && formik.errors.stipend ? (
              <Error errorMessage={formik.errors.stipend} />
            ) : null}
          </div>

          <div className={styles.field}>
            <RadioSelect
              name="hasPPO"
              placeholder="Pre Placement Offer"
              value={formik.values.hasPPO}
              onChange={handleIsPPOButton}
              onBlur={formik.handleBlur}
            />
          </div>

          {formik.values.hasPPO === BooleanValue.TRUE ? (
            <div className={styles.field}>
              <Input
                name="ctcAfterPpo"
                type="number"
                placeholder="CTC Offered After PPO"
                value={formik.values.ctcAfterPpo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          ) : null}
          <div className={styles.field}>
            <Input
              name="duration"
              type="number"
              placeholder="Duration ( In Months )"
              value={formik.values.duration}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.duration && formik.errors.duration ? (
              <Error errorMessage={formik.errors.duration} />
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
              type="number"
              placeholder="CGPI"
              value={formik.values.cgpi}
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
      {summerInternJobProfiles.length > 0 && (
        <div className={styles.table_container}>
          <Table w="100%">
            <Thead>
              <Tr>
                <Th>Job Profile</Th>
                <Th>Stipend Offered</Th>
                <Th>Duration (in Months)</Th>
                <Th>JD Link</Th>
                <Th>Min. CGPI</Th>
                <Th>Eligible Branches</Th>
                <Th>Tentative Joining Date</Th>
                <Th>PPO Offered</Th>
                <Th>Delete Profile</Th>
              </Tr>
            </Thead>
            <Tbody>
              {summerInternJobProfiles.map((internProfile: SummerInternJobProfile, index) => {
                return (
                  <Tr key={internProfile.jobProfile}>
                    <Td>{internProfile.jobProfile}</Td>
                    <Td>{internProfile.stipend}</Td>
                    <Td>{internProfile.duration}</Td>
                    <Td>{internProfile.jdLink}</Td>
                    <Td>{internProfile.cgpi}</Td>
                    <Td>
                      {internProfile.eligibleBatches.map((batch: any) => {
                        return (
                          <li key={`${batch.course}: ${batch.branchName}`}>
                            {`${batch.course}: ${batch.branchName}`}
                          </li>
                        )
                      })}
                    </Td>
                    <Td>{internProfile.tentativeJoiningDate}</Td>
                    <Td>
                      {internProfile.hasPPO
                        ? `Expected CTC: ${internProfile.ctcAfterPpo} LPA`
                        : 'No'}
                    </Td>
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
          isDisabled={summerInternJobProfiles.length <= 0}
          onClick={handleFormSubmit}
        >
          Next
        </Button>
      </div>
    </>
  )
}
