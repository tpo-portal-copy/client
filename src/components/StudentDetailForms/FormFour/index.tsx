/* eslint-disable react/no-children-prop */
import { FormikHelpers, FormikValues, useFormik } from 'formik'
import styles from './FormFour.module.scss'
import { clusterData } from '../../../utils/Data/FormUIData'
import Button from '../../Button'
import Input from '../../Input'
import ClusterCard from '../../Cards/ClusterCard'

export default function FormFour({ onSubmit }: FormikHelpers<FormikValues>) {
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
        {clusterData.map((data) => (
          <ClusterCard
            // id={data.clusterName}
            type="checkbox"
            key={data.id}
            title={data.clusterName}
            range={data.clusterRange}
          />
        ))}
      </div>
      <Button onsubmit={onsubmit} type="submit" stretch={false} children="Submit" />
    </form>
  )
}
