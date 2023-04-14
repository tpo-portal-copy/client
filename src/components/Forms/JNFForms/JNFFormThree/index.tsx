import { Button, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { FormikState, useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { EligibleBranch, JNFFormThreeData, JNFFormThreeProps } from '../../../../utils/types'
import coursesData from '../../../../utils/Data/coursesData'
import styles from './JNFFormThree.module.scss'
import { Input, RadioSelect, Select, Error } from '../../../index'
import { BooleanValue } from '../../../../utils/constants'

export default function JNFFormThree({ onNext, onBack, data }: JNFFormThreeProps) {
  const [internProfiles, setInternProfiles] = useState<Array<object>>([])

  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      isPPO: Yup.string(),
      tentativeJoiningDate: Yup.string().required('Starting Date is required'),
      jobProfile: Yup.string().required('Job profile required'),
      stipend: Yup.number().required('stipend is required'),
      duration: Yup.number(),
      ctc: Yup.number(),
      jobDescription: Yup.string().required('JD Link is required'),
      cgpi: Yup.number().required('Cgpi is required'),
      eligibleBatches: Yup.string(),
      course: Yup.string().required('Course is required'),
      branch: Yup.string().required('Branch is required'),
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

  const clearForm = () => {
    const initialValues: JNFFormThreeData = {
      isPPO: false,
      tentativeJoiningDate: '',
      jobProfile: '',
      stipend: undefined,
      duration: undefined,
      ctc: undefined,
      jobDescription: '',
      cgpi: undefined,
      eligibleBatches: '',
      course: '',
      branch: '',
    }

    const formikState: FormikState<JNFFormThreeData> = {
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
      stipend: formik.values.stipend,
      duration: formik.values.duration,
      jdLink: formik.values.jobDescription,
      cgpi: formik.values.cgpi,
      eligibleBatches,
      tentativeJoiningDate: formik.values.tentativeJoiningDate,
      ctc: formik.values.ctc,
      isPPO: formik.values.isPPO,
    }

    const newInternProfiles = [...internProfiles, newProfile]
    setInternProfiles(newInternProfiles)
    clearForm()
  }

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

  const handleIsPPOButton = (value: string) => {
    formik.setFieldValue('isPPO', value === BooleanValue.TRUE)
  }

  return (
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
            name="isPPO"
            placeholder="Pre Placement Offer"
            value={formik.values.isPPO ? BooleanValue.TRUE : BooleanValue.FALSE}
            onChange={handleIsPPOButton}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.values.isPPO ? (
          <div className={styles.field}>
            <Input
              name="ctc"
              type="number"
              placeholder="CTC Offered After PPO"
              value={formik.values.ctc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        ) : null}
        <div className={styles.field}>
          <Input
            name="duration"
            type="number"
            placeholder="Duration(in months)"
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
              <Th>Stipend Offered</Th>
              <Th>Duration (in Months)</Th>
              <Th>JD Link</Th>
              <Th>Min. CGPI</Th>
              <Th>Eligible Branches</Th>
              <Th>Tentative Joining Date</Th>
              <Th>PPO Offered</Th>
            </Tr>
          </Thead>
          <Tbody>
            {internProfiles.map((internProfile: any) => {
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
                        <li key={`${batch.course_name}: ${batch.branch_name}`}>
                          {`${batch.course_name}: ${batch.branch_name}`}
                        </li>
                      )
                    })}
                  </Td>
                  <Td>{internProfile.tentativeJoiningDate}</Td>
                  <Td>{internProfile.isPPO ? `Expected CTC: ${internProfile.ctc} LPA` : 'No'}</Td>
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
