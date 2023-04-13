import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import Lottie from 'lottie-react'
import Loader from '../../assets/animations/72411-simple-grey-spinner.json'
import useRecentExperience from '../../hooks/useRecentExperience'
import { fromNow, getDataFromLocalStorage } from '../../utils/functions'
import styles from './RecentExperience.module.scss'

export default function RecentExperience() {
  const { data, isError, isSuccess } = useRecentExperience()
  if (isError) {
    return (
      <div className={styles.recent_experiences}>
        <span className={styles.message}>Failed to load....</span>
      </div>
    )
  }
  if (!isSuccess) {
    return (
      <div className={styles.recent_experiences}>
        <Lottie animationData={Loader} />
      </div>
    )
  }

  if (getDataFromLocalStorage('eligibility') === 'NA') {
    return (
      <div className={styles.recent_experiences}>
        <span className={styles.message}>Not applicable for posting experiences</span>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className={styles.recent_experiences}>
        <span className={styles.message}>You have not posted any experience</span>
      </div>
    )
  }

  return (
    <div className={styles.recent_experiences_container}>
      <p className={styles.recent_experiences_title}>My Experiences</p>
      {isSuccess &&
        data.map((datas: any) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            key={datas.id}
          >
            <div className={styles.list_item}>
              <div className={styles.pic}>
                <img alt="users_image" src={datas.company_image_url} width={40} height={40} />
              </div>
              <div className={styles.info}>
                <div className={styles.contents}>
                  <p className={styles.name}>{datas.company}</p>
                  <p className={styles.date}>{fromNow(datas.updated_at)}</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesomeIcon color="#82CD47" icon={faEdit} />
              <FontAwesomeIcon color="#F45050" style={{ marginLeft: '20px' }} icon={faTrash} />
            </div>
          </div>
        ))}
    </div>
  )
}
