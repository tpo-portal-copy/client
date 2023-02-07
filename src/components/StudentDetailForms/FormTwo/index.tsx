/* eslint-disable react/no-children-prop */
import { FormikHelpers, FormikValues, useFormik } from 'formik'
import styles from './FormTwo.module.scss'
import { educationInfo } from '../../../utils/Data/FormUIData'
import Button from '../../Button'
import Input from '../../Input'

export default function FormTwo({ onsubmit }: FormikHelpers<FormikValues>) {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values, helper) => {
      console.log(values, helper)
      await onsubmit()
    },
  })
  return (
    <form className={styles.info_container} onSubmit={formik.handleSubmit}>
      <div className={styles.info}>
        {educationInfo.map((info) => (
          <Input
            id={info.label}
            key={info.id}
            label={info.label}
            type={info.type}
            options={info.type === 'list' ? info.options : [{ id: 1, value: '1' }]}
          />
        ))}
      </div>
      <Button onsubmit={onsubmit} type="submit" stretch={false} children="Next" />
    </form>
  )
}
