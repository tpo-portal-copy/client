import { Link } from 'react-router-dom'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UpcomingDriveData from '../../utils/UpcomingDriveData'
import styles from './UpcomingDrive.module.scss'

function UpcomingDrive() {
  return (
    <div>
      <ul>
        {UpcomingDriveData.map((val) => {
          return (
            <li key={val.id} className={styles.list_item}>
              <Link className={styles.company_url} to={val.link}>
                <div className={styles.company_data}>
                  <div className={styles.company_logo}>
                    <FontAwesomeIcon icon={faApple} color="lightBlue" size="lg" fixedWidth />
                  </div>
                  <div className={styles.company_info}>
                    <div className={styles.company_name}>{val.companyName}</div>
                    <div className={styles.company_date}>{val.date}</div>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UpcomingDrive
