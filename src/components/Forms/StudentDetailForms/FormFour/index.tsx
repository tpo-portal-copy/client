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
  AlertIcon,
  Alert,
  VStack,
} from '@chakra-ui/react'
import * as Yup from 'yup'
import styles from './FormFour.module.scss'
import { FormFourProps } from '../../../../utils/types'
import { Input } from '../../../index'

const columns = [
  { id: 1, value: 'Choose' },
  { id: 2, value: 'Cluster ID' },
  { id: 3, value: 'Starting CTC' },
  { id: 4, value: 'Ending CTC' },
]

export default function FormFour({ onSubmit }: FormFourProps) {
  const formik = useFormik({
    initialValues: {
      cluster1: false,
      cluster2: false,
      cluster3: false,
      cluster4: false,
      cluster5: false,
      cluster6: false,
      resume: '',
      consent: false,
    },
    validationSchema: Yup.object().shape({
      resume: Yup.string().url('Please enter a valid link').required('*Required'),
      consent: Yup.boolean().oneOf([true]).required('*Required'),
    }),
    onSubmit: (values) => {
      onSubmit()
    },
  })

  const [maxSelection, setMaxSelection] = useState(0)

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <TableContainer>
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
                <Checkbox
                  name="cluster1"
                  onChange={(e) => {
                    formik.handleChange(e)
                    if (formik.values.cluster1 === true) {
                      setMaxSelection(maxSelection + 1)
                    } else if (formik.values.cluster1 === false) {
                      setMaxSelection(maxSelection - 1)
                    }
                  }}
                  isDisabled={formik.values.cluster1 === false && Math.abs(maxSelection) === 3}
                >
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
                    if (formik.values.cluster2 === true) {
                      setMaxSelection(maxSelection + 1)
                    } else if (formik.values.cluster2 === false) {
                      setMaxSelection(maxSelection - 1)
                    }
                  }}
                  isDisabled={formik.values.cluster2 === false && Math.abs(maxSelection) === 3}
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
                    if (formik.values.cluster3 === true) {
                      setMaxSelection(maxSelection + 1)
                    } else if (formik.values.cluster3 === false) {
                      setMaxSelection(maxSelection - 1)
                    }
                  }}
                  isDisabled={formik.values.cluster3 === false && Math.abs(maxSelection) === 3}
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
                    if (formik.values.cluster4 === true) {
                      setMaxSelection(maxSelection + 1)
                    } else if (formik.values.cluster4 === false) {
                      setMaxSelection(maxSelection - 1)
                    }
                  }}
                  isDisabled={formik.values.cluster4 === false && Math.abs(maxSelection) === 3}
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
                    if (formik.values.cluster5 === true) {
                      setMaxSelection(maxSelection + 1)
                    } else if (formik.values.cluster5 === false) {
                      setMaxSelection(maxSelection - 1)
                    }
                  }}
                  isDisabled={formik.values.cluster5 === false && Math.abs(maxSelection) === 3}
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
                    if (formik.values.cluster6 === true) {
                      setMaxSelection(maxSelection + 1)
                    } else if (formik.values.cluster6 === false) {
                      setMaxSelection(maxSelection - 1)
                    }
                  }}
                  isDisabled={formik.values.cluster6 === false && Math.abs(maxSelection) === 3}
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

      <VStack spacing={4}>
        <>
          <Input
            name="resume"
            placeholder="Resume Link"
            value={formik.values.resume}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.resume && formik.errors.resume ? (
            <Alert className={styles.alert} status="error">
              <AlertIcon />
              {formik.errors.resume}
            </Alert>
          ) : null}
          <Checkbox name="consent" onChange={formik.handleChange}>
            I provide my consent to share my data with TPO for future oppurtunites. I also confirm
            that the information entered by me is accurate and best of my knowledge.
          </Checkbox>
        </>
      </VStack>
      <div className={styles.btn_container}>
        <Button
          className={styles.btn}
          colorScheme="blue"
          isDisabled={!formik.isValid}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  )
}
