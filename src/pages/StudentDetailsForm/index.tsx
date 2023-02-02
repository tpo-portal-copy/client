import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/Input'
import styles from './StudentDetailsForm.module.scss'
import { basicInfo, educationInfo, collegeInfo, clusterData } from '../../utils/Data/FormUIData'
import ClusterCard from '../../components/Cards/ClusterCard'

export default function Form() {
  return (
    <>
      <h1 className={styles.page_name}>Fill Your Details</h1>
      <form className={styles.container}>
        <div className={styles.info_container}>
          <span className={styles.heading}>Basic Info</span>
          <div className={styles.info}>
            {basicInfo.map((info) => (
              <Input
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
        </div>
        <div className={styles.info_container}>
          <span className={styles.heading}>Education</span>
          <div className={styles.info}>
            {educationInfo.map((info) => (
              <Input key={info.id} label={info.label} type={info.type} />
            ))}
          </div>
        </div>
        <div className={styles.info_container}>
          <span className={styles.heading}>College</span>
          <div className={styles.info}>
            {collegeInfo.map((info) => (
              <Input
                key={info.id}
                label={info.label}
                type={info.type}
                options={info.type === 'list' ? info.options : [{ id: 1, value: '1' }]}
              />
            ))}
          </div>
        </div>
        <div className={styles.info_container}>
          <span className={styles.heading}>Choose Clusters</span>
          <div className={styles.info}>
            {clusterData.map((data) => (
              <ClusterCard
                type="checkbox"
                key={data.id}
                title={data.clusterName}
                range={data.clusterRange}
              />
            ))}
          </div>
        </div>
      </form>
    </>
  )
}
