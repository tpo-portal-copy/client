import { useNavigate } from 'react-router-dom'
import { Button, VStack, Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import Lottie from 'lottie-react'
import Animation from '../../assets/animations/95580-time-table.json'
import Loading from '../../assets/animations/81544-rolling-check-mark.json'
import 'react-quill/dist/quill.snow.css'
import { Error, Input } from '../../components'
import styles from './SlotPostForm.module.scss'

export default function SlotPostForm() {
  const [showAnimation, setShowAnimation] = useState(false)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0], // Current date in ISO format
      startTime: '',
      endTime: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required().min(11, 'Description is too short'),
      date: Yup.string().required('Date is required'),
      startTime: Yup.string().required('From time is required'),
      endTime: Yup.string()
        .required('End time is required')
        .when('startTime', (startTime, schema) => {
          return schema.test({
            test: (endTime) => {
              if (startTime && endTime) {
                return startTime < endTime
              }
              return true
            },
            message: 'End time must be after the start time',
          })
        }),
    }),
    onSubmit: async (values) => {
      try {
        const objToSend = {
          title: values.title,
          date: values.date,
          startTime: values.startTime,
          endTime: values.endTime,
          description: values.description,
        }
        // await dashboardAPI.post('/', objToSend)
        console.log(objToSend)

        setShowAnimation((state) => !state)
        setTimeout(() => {
          navigate('/dashboard')
        }, 3000)
      } catch (err) {
        console.log(err)
      }
    },
  })

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.heading}>Post Your Available Slot</h2>
        <Lottie animationData={Animation} />
      </div>
      <div className={styles.content}>
        {showAnimation ? (
          <div className={styles.animation_container}>
            <Lottie
              loop={false}
              autoPlay={false}
              animationData={Loading}
              className={styles.animation}
            />
            <Text className={styles.tag_line}>Slot Created Successfully</Text>{' '}
          </div>
        ) : (
          <>
            <h1 className={styles.heading}>Post Your Available Slot</h1>
            <form onSubmit={formik.handleSubmit} className={styles.form_container}>
              <VStack align="stretch" spacing={4}>
                <>
                  <Input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="title"
                    placeholder="Title"
                    value={formik.values.title}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <Error errorMessage={formik.errors.title} />
                  ) : null}

                  <Input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="description"
                    placeholder="Description"
                    value={formik.values.description}
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <Error errorMessage={formik.errors.description} />
                  ) : null}

                  <Input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="date"
                    type="date"
                    placeholder="Date"
                    value={formik.values.date}
                  />
                  {formik.touched.date && formik.errors.date ? (
                    <Error errorMessage={formik.errors.date} />
                  ) : null}
                  <Input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="startTime"
                    type="time"
                    placeholder="Start Time"
                    value={formik.values.startTime.toString()}
                  />
                  {formik.touched.startTime && formik.errors.startTime ? (
                    <Error errorMessage={formik.errors.startTime} />
                  ) : null}

                  <Input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="endTime"
                    type="time"
                    placeholder="End Time"
                    value={formik.values.endTime}
                  />
                  {formik.touched.endTime && formik.errors.endTime ? (
                    <Error errorMessage={formik.errors.endTime} />
                  ) : null}

                  <Text color="blackAlpha.600" fontSize="sm">
                    *students can see your contact details after you post a slot.
                  </Text>

                  <Button
                    background="linear-gradient(40deg,#45cafc,#303f9f)"
                    color="white"
                    _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
                    isLoading={formik.isSubmitting}
                    type="submit"
                    isDisabled={!formik.isValid}
                  >
                    Post
                  </Button>
                </>
              </VStack>
            </form>{' '}
          </>
        )}
      </div>
    </div>
  )
}
