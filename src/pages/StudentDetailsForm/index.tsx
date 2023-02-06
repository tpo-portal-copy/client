/* eslint-disable react/no-children-prop */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { Formik, Form, Field, useFormik } from 'formik'
// import { FormikHelpers } from 'formik/dist/types'
import Input from '../../components/Input'
import styles from './StudentDetailsForm.module.scss'
import { basicInfo, educationInfo, collegeInfo, clusterData } from '../../utils/Data/FormUIData'
import { Button } from '../../components'
import ClusterCard from '../../components/Cards/ClusterCard'

// export default function StudentDetailsForm() {
//   return (
//     <form className={styles.container}>
//       <div className={styles.info_container}>
//         <span className={styles.heading}>Basic Info</span>
//         <div className={styles.info}>
//           {basicInfo.map((info) => (
//             <Input
//               key={info.id}
//               label={info.label}
//               type={info.type}
//               options={info.type === 'list' ? info.options : [{ id: 1, value: '1' }]}
//             />
//           ))}
//           <div className={styles.img_upload_container}>
//             <span>Upload Your Image</span>
//             <FontAwesomeIcon className={styles.icon} icon={faUpload} />
//           </div>
//         </div>
//       </div>
//       <div className={styles.info_container}>
//         <span className={styles.heading}>Education</span>
//         <div className={styles.info}>
//           {educationInfo.map((info) => (
//             <Input key={info.id} label={info.label} type={info.type} />
//           ))}
//         </div>
//       </div>
//       <div className={styles.info_container}>
//         <span className={styles.heading}>College</span>
//         <div className={styles.info}>
//           {collegeInfo.map((info) => (
//             <Input
//               key={info.id}
//               label={info.label}
//               type={info.type}
//               options={info.type === 'list' ? info.options : [{ id: 1, value: '1' }]}
//             />
//           ))}
//         </div>
//       </div>
//       <div className={styles.info_container}>
//         <span className={styles.heading}>Choose Clusters</span>
//         <div className={styles.info}>
//           {clusterData.map((data) => (
//             <ClusterCard
//               type="checkbox"
//               key={data.id}
//               title={data.clusterName}
//               range={data.clusterRange}
//             />
//           ))}
//         </div>
//       </div>
//     </form>
//   )
// }

export default function StudentDetailsForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
      <Button type="submit" stretch={false} children="Submit" />
    </form>
  )
}
