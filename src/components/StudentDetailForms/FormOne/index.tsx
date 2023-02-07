/* eslint-disable react/no-children-prop */
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik, FormikConfig, FormikValues, FormikHelpers } from 'formik'
import styles from './FormOne.module.scss'
import Input from '../../Input'
import { basicInfo } from '../../../utils/Data/FormUIData'
import { Button } from '../../index'

export default function FormOne({ onsubmit }: FormikHelpers<FormikValues>) {
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
        {basicInfo.map((info) => (
          <Input
            id={info.label}
            key={info.id}
            label={info.label}
            type={info.type}
            options={info.type === 'list' ? info.options : [{ id: 1, value: '1' }]}
          />
        ))}
        <div className={styles.img_upload_container}>
          <span>Upload Your Image</span>
          <FontAwesomeIcon className={styles.icon} icon={faUpload} />
        </div>
      </div>
      <div className={styles.button_container}>
        <Button onsubmit={onsubmit} type="submit" stretch={false} children="Back" />
        <Button onsubmit={onsubmit} type="submit" stretch={false} children="Next" />
      </div>
    </form>
  )
}
