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
import { Error, Input } from '../../../index'

const columns = [
  { id: 1, value: 'Choose' },
  { id: 2, value: 'Cluster ID' },
  { id: 3, value: 'Starting CTC' },
  { id: 4, value: 'Ending CTC' },
]

export default function FormFour({ onSubmit }: FormFourProps) {
  const [selectedClusters, setSelectedClusters] = useState(0)
  const [isClustersTouched, setIsClustersTouched] = useState(false)

  const formik = useFormik({
    initialValues: {
      cluster1: true,
      cluster2: false,
      cluster3: false,
      cluster4: false,
      cluster5: false,
      cluster6: false,
      resume: '',
      consent: false,
    },
    validationSchema: Yup.object().shape({
      resume: Yup.string().url('Please enter a valid link.').required('Resume link is required.'),
      consent: Yup.boolean()
        .oneOf([true], 'You must provide your consent.')
        .required('You must provide your consent.'),
    }),
    onSubmit: (values) => {
      onSubmit()
    },
  })

  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    setIsClustersTouched(true)
    if (selectedClusters !== 3) return
    formik.handleSubmit()
  }

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
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
                    name="cluster2"
                    onChange={(e) => {
                      formik.handleChange(e)
                      if (isClustersTouched === false) {
                        setIsClustersTouched(true)
                      }
                      if (formik.values.cluster2 === true) {
                        setSelectedClusters(selectedClusters + 1)
                      } else if (formik.values.cluster2 === false) {
                        setSelectedClusters(selectedClusters - 1)
                      }
                    }}
                    isDisabled={
                      formik.values.cluster2 === false && Math.abs(selectedClusters) === 3
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
                    name="cluster3"
                    onChange={(e) => {
                      formik.handleChange(e)
                      if (isClustersTouched === false) {
                        setIsClustersTouched(true)
                      }
                      if (formik.values.cluster3 === true) {
                        setSelectedClusters(selectedClusters + 1)
                      } else if (formik.values.cluster3 === false) {
                        setSelectedClusters(selectedClusters - 1)
                      }
                    }}
                    isDisabled={
                      formik.values.cluster3 === false && Math.abs(selectedClusters) === 3
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
                    name="cluster4"
                    onChange={(e) => {
                      formik.handleChange(e)
                      if (isClustersTouched === false) {
                        setIsClustersTouched(true)
                      }
                      if (formik.values.cluster4 === true) {
                        setSelectedClusters(selectedClusters + 1)
                      } else if (formik.values.cluster4 === false) {
                        setSelectedClusters(selectedClusters - 1)
                      }
                    }}
                    isDisabled={
                      formik.values.cluster4 === false && Math.abs(selectedClusters) === 3
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
                    name="cluster5"
                    onChange={(e) => {
                      formik.handleChange(e)
                      if (isClustersTouched === false) {
                        setIsClustersTouched(true)
                      }
                      if (formik.values.cluster5 === true) {
                        setSelectedClusters(selectedClusters + 1)
                      } else if (formik.values.cluster5 === false) {
                        setSelectedClusters(selectedClusters - 1)
                      }
                    }}
                    isDisabled={
                      formik.values.cluster5 === false && Math.abs(selectedClusters) === 3
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
                    name="cluster6"
                    onChange={(e) => {
                      formik.handleChange(e)
                      if (isClustersTouched === false) {
                        setIsClustersTouched(true)
                      }
                      if (formik.values.cluster6 === true) {
                        setSelectedClusters(selectedClusters + 1)
                      } else if (formik.values.cluster6 === false) {
                        setSelectedClusters(selectedClusters - 1)
                      }
                    }}
                    isDisabled={
                      formik.values.cluster6 === false && Math.abs(selectedClusters) === 3
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
      <VStack spacing={4}>
        <>
          <div className={styles.resume_link}>
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
          </div>
          <div>
            <Checkbox name="consent" onChange={formik.handleChange}>
              I provide my consent to share my data with TPO for future oppurtunites. I also confirm
              that the information entered by me is accurate and best of my knowledge.
            </Checkbox>
            {formik.touched.consent && formik.errors.consent ? (
              <Error errorMessage={formik.errors.consent} />
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
        >
          Submit
        </Button>
      </div>
    </form>
  )
}
