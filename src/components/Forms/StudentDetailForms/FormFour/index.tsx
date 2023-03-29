import { useState } from 'react'
import { useFormik } from 'formik'
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Checkbox,
  Button,
  VStack,
} from '@chakra-ui/react'
import * as Yup from 'yup'
import styles from './FormFour.module.scss'
import { FormFourProps } from '../../../../utils/types'
import { Error, Input, Select } from '../../../index'
import { data } from '../../../../utils/Data/coursesAllowedData'

const columns = [
  { id: 1, value: 'Choose' },
  { id: 2, value: 'Cluster ID' },
  { id: 3, value: 'Starting CTC' },
  { id: 4, value: 'Ending CTC' },
]

export default function FormFour({ onSubmit, course, year }: FormFourProps) {
  const [selectedClusters, setSelectedClusters] = useState(0)
  const [isClustersTouched, setIsClustersTouched] = useState(false)

  const formik = useFormik({
    initialValues: {
      cluster_1: true,
      cluster_2: false,
      cluster_3: false,
      cluster_4: false,
      cluster_5: false,
      cluster_6: false,
      resume: '',
      undertaking: false,
      interested: '',
      reason: '',
    },
    validationSchema: Yup.object().shape({
      resume: Yup.string().url('Please enter a valid link.'),
      undertaking: Yup.boolean()
        .oneOf([true], 'You must provide your consent.')
        .required('You must provide your consent.'),
      interested: Yup.string(),
      reason: Yup.string(),
    }),
    onSubmit: (values) => {
      onSubmit(values)
    },
  })

  const idx = data.findIndex((i: any) => i.course === course && i.year === year)
  if (idx === -1) {
    return <h1> Not found</h1>
  }

  const handleFormSubmit = async (event: any) => {
    event.preventDefault()
    if (data[idx].type_allowed === 'placement') {
      setIsClustersTouched(true)
      if (Math.abs(selectedClusters) !== 3) return
    }

    const res = await formik.handleSubmit()
  }

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      {data[idx].type_allowed === 'placement' && (
        <Select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="interested"
          placeholder="Interested in Placements"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      )}
      {data[idx].type_allowed === 'intern' ||
      data[idx].type_allowed === 'NA' ||
      (data[idx].type_allowed === 'placement' &&
        (formik.values.interested === '' || formik.values.interested === 'no')) ? null : (
        <div>
          <TableContainer className={styles.table_container}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  {columns.map((column) => (
                    <Th key={column.id}>{column.value}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Checkbox name="cluster1" defaultChecked isDisabled>
                      Cluster 1
                    </Checkbox>
                  </Td>
                  <Td>1</Td>
                  <Td>0</Td>
                  <Td>4.5 Lakhs</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox
                      name="cluster_2"
                      onChange={(e) => {
                        formik.handleChange(e)
                        if (isClustersTouched === false) {
                          setIsClustersTouched(true)
                        }
                        if (formik.values.cluster_2 === true) {
                          setSelectedClusters(selectedClusters + 1)
                        } else if (formik.values.cluster_2 === false) {
                          setSelectedClusters(selectedClusters - 1)
                        }
                      }}
                      isDisabled={
                        formik.values.cluster_2 === false && Math.abs(selectedClusters) === 3
                      }
                    >
                      Cluster 2
                    </Checkbox>
                  </Td>
                  <Td>2</Td>
                  <Td>5 Lakhs</Td>
                  <Td>10 Lakhs</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox
                      name="cluster_3"
                      onChange={(e) => {
                        formik.handleChange(e)
                        if (isClustersTouched === false) {
                          setIsClustersTouched(true)
                        }
                        if (formik.values.cluster_3 === true) {
                          setSelectedClusters(selectedClusters + 1)
                        } else if (formik.values.cluster_3 === false) {
                          setSelectedClusters(selectedClusters - 1)
                        }
                      }}
                      isDisabled={
                        formik.values.cluster_3 === false && Math.abs(selectedClusters) === 3
                      }
                    >
                      Cluster 3
                    </Checkbox>
                  </Td>
                  <Td>3</Td>
                  <Td>12 Lakhs</Td>
                  <Td>18 Lakhs</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox
                      name="cluster_4"
                      onChange={(e) => {
                        formik.handleChange(e)
                        if (isClustersTouched === false) {
                          setIsClustersTouched(true)
                        }
                        if (formik.values.cluster_4 === true) {
                          setSelectedClusters(selectedClusters + 1)
                        } else if (formik.values.cluster_4 === false) {
                          setSelectedClusters(selectedClusters - 1)
                        }
                      }}
                      isDisabled={
                        formik.values.cluster_4 === false && Math.abs(selectedClusters) === 3
                      }
                    >
                      Cluster 4
                    </Checkbox>
                  </Td>
                  <Td>4</Td>
                  <Td>25 Lakhs</Td>
                  <Td>35 Lakhs</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox
                      name="cluster_5"
                      onChange={(e) => {
                        formik.handleChange(e)
                        if (isClustersTouched === false) {
                          setIsClustersTouched(true)
                        }
                        if (formik.values.cluster_5 === true) {
                          setSelectedClusters(selectedClusters + 1)
                        } else if (formik.values.cluster_5 === false) {
                          setSelectedClusters(selectedClusters - 1)
                        }
                      }}
                      isDisabled={
                        formik.values.cluster_5 === false && Math.abs(selectedClusters) === 3
                      }
                    >
                      Cluster 5
                    </Checkbox>
                  </Td>
                  <Td>5</Td>
                  <Td>35 Lakhs</Td>
                  <Td>42 Lakhs</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox
                      name="cluster_6"
                      onChange={(e) => {
                        formik.handleChange(e)
                        if (isClustersTouched === false) {
                          setIsClustersTouched(true)
                        }
                        if (formik.values.cluster_6 === true) {
                          setSelectedClusters(selectedClusters + 1)
                        } else if (formik.values.cluster_6 === false) {
                          setSelectedClusters(selectedClusters - 1)
                        }
                      }}
                      isDisabled={
                        formik.values.cluster_6 === false && Math.abs(selectedClusters) === 3
                      }
                    >
                      Cluster 6
                    </Checkbox>
                  </Td>
                  <Td>6</Td>
                  <Td>42 Lakhs</Td>
                  <Td>-----</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          {isClustersTouched && selectedClusters !== -3 ? (
            <Error errorMessage="You must select three clusters." />
          ) : null}
        </div>
      )}
      <VStack spacing={4}>
        <>
          {data[idx].type_allowed === 'NA' ? null : (
            <div className={styles.resume_link}>
              {data[idx].type_allowed === 'placement' && formik.values.interested === 'no' ? (
                <Select
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="reason"
                  placeholder="Reason"
                >
                  <option value="higher studies">Higher Studies</option>
                  <option value="research">Research</option>
                  <option value="govt job">Government Job</option>
                  <option value="enterprenuer">Enterprenuer</option>
                  <option value="other">Others</option>
                </Select>
              ) : (
                <>
                  <Input
                    name="resume"
                    placeholder="Resume Link"
                    value={formik.values.resume}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.resume && formik.errors.resume ? (
                    <Error errorMessage={formik.errors.resume} />
                  ) : null}
                </>
              )}
            </div>
          )}
          <div>
            <Checkbox name="undertaking" onChange={formik.handleChange}>
              I provide my consent to share my data with TPO for future oppurtunites. I also confirm
              that the information entered by me is accurate and best of my knowledge.
            </Checkbox>
            {formik.touched.undertaking && formik.errors.undertaking ? (
              <Error errorMessage={formik.errors.undertaking} />
            ) : null}
          </div>
        </>
      </VStack>
      <div className={styles.btn_container}>
        <Button
          background="linear-gradient(40deg,#45cafc,#303f9f)"
          color="white"
          _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
          className={styles.btn}
          type="submit"
          disabled={formik.isSubmitting || !formik.isValid}
          isLoading={formik.isSubmitting}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}
