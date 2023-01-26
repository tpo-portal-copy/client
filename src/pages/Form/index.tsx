import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import FormField from '../../components/FormField'
import styles from './Form.module.scss'
import { BasicInfo, EducationInfo, CollegeInfo, ClusterData } from '../../utils/Data/FormUIData'
import ClusterList from '../../components/ClusterList'

export default function Form() {
  return (
    <form className={styles.container}>
      <div className={styles.info_container}>
        <span className={styles.heading}>Basic Info</span>
        <div className={styles.info}>
          {BasicInfo.map((info) => (
            <FormField
              key={info.id}
              label={info.label}
              role={info.role}
              data={info.role === 'list' ? info.data : [{ id: 1, value: '1' }]}
            />
          ))}
          <div className={styles.img_upload_container}>
            <span>Upload Your Image</span>
            <FontAwesomeIcon className={styles.icon} icon={faUpload} />
          </div>
        </div>
      </div>
      <div className={styles.info_container}>
        <span className={styles.heading}>Education</span>
        <div className={styles.info}>
          {EducationInfo.map((info) => (
            <FormField
              key={info.id}
              label={info.label}
              role={info.role}
              data={info.role === 'list' ? info.data : [{ id: 1, value: '1' }]}
            />
          ))}
        </div>
      </div>
      <div className={styles.info_container}>
        <span className={styles.heading}>College</span>
        <div className={styles.info}>
          {CollegeInfo.map((info) => (
            <FormField
              key={info.id}
              label={info.label}
              role={info.role}
              data={info.role === 'list' ? info.data : [{ id: 1, value: '1' }]}
            />
          ))}
        </div>
      </div>
      <div className={styles.info_container}>
        <span className={styles.heading}>Choose Clusters</span>
        <div className={styles.info}>
          {ClusterData.map((data) => (
            <ClusterList
              key={data.id}
              clusterName={data.clusterName}
              clusterRange={data.clusterRange}
            />
          ))}
        </div>
      </div>
    </form>
  )
}
