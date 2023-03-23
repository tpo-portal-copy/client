import { VStack, Button, Table, Thead, Tbody, Tr, Th, Td, Checkbox } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { JNFFormThreeProps } from '../../../../utils/types'
import coursesData from '../../../../utils/Data/coursesData'
import styles from './JNFFormThree.module.scss'
import { Input, RadioSelect } from '../../../index'

export default function JNFFormFour({ onNext, onBack, data }: JNFFormThreeProps) {
  const [ppo, setPPO] = useState('')
  const [checkedBatches, setCheckedBatches] = useState([])

  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      type: Yup.string().required(),
      name: Yup.string().required('name is required'),
      mobileNumber: Yup.number().required('job profile is required'),
      email: Yup.string().required(),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })

  const handleIsPPOButton = (value: string) => {
    setPPO(value)
  }
  return (
    <form
      className={styles.container}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onSubmit={formik.handleSubmit}
    >
      <VStack w="100%" maxW="700px">
        <Input
          name="tentativeStartDate"
          type="date"
          placeholder="Tentative Drive Date"
          value={formik.values.tentativeStartDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Input
          name="jobProfile"
          placeholder="Job Profile"
          value={formik.values.jobProfile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Input
          name="stipend"
          placeholder="Stipend Offered"
          value={formik.values.stipend || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <RadioSelect
          name="isPPO"
          placeholder="PPO"
          value={ppo}
          onChange={handleIsPPOButton}
          onBlur={formik.handleBlur}
        />

        <Input
          name="ctc"
          placeholder="CTC Offered"
          value={formik.values.ctc || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Input
          name="duration"
          placeholder="Duration"
          value={formik.values.duration || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Input
          name="jobDescription"
          placeholder="Job Description"
          value={formik.values.jobDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Input
          name="cgpi"
          placeholder="CGPI"
          value={formik.values.cgpi || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className={styles.label}>Eligible Batches</div>
        {coursesData.map((course) => {
          return (
            <div key={course.id} className={styles.course_container}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th className={styles.course_title}>{course.courseName}</Th>
                    <Checkbox
                      isChecked={
                        setCheckedBatches.length ===
                        course.batches.map((batch) => batch.batchName).length
                      }
                      onChange={() => {
                        const checkBatches = course.batches.map((batch) => batch.batchName)
                        if (checkedBatches.length === checkBatches.length) {
                          setCheckedBatches([])
                        } else {
                          setCheckedBatches(checkBatches)
                        }
                      }}
                    >
                      Select All
                    </Checkbox>
                  </Tr>
                </Thead>
                <Tbody>
                  {course.batches.map((batch) => {
                    return (
                      <Tr key={batch.id}>
                        <Td className={styles.batch_name}>{batch.batchName}</Td>
                        <Td>
                          <Checkbox
                            isChecked={checkedBatches.includes(batch.batchName)}
                            onChange={(event) => {
                              event.stopPropagation()
                              const index = checkedBatches.indexOf(batch.batchName)
                              if (index > -1) {
                                setCheckedBatches([
                                  ...checkedBatches.slice(0, index),
                                  ...checkedBatches.slice(index + 1),
                                ])
                              } else {
                                setCheckedBatches([...checkedBatches, batch.batchName])
                              }
                            }}
                          />
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </div>
          )
        })}

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
      </VStack>
    </form>
  )
}
