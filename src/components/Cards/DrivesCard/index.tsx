import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { DrivesCardProps } from '../../../utils/types'
import styles from './DrivesCard.module.scss'

function DrivesCard({
  companyName,
  imgUrl,
  ctcOffered,
  startingDate,
  type,
  eligibleBatches,
  jobProfile,
}: DrivesCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.main_container}>
          <img className={styles.company_image} src={imgUrl} alt="company Logo" />
          <div className={styles.content}>
            <h2 className={styles.company_name}>{companyName}</h2>
            <div className={styles.company_details}>
              <div className={styles.company_info}>
                <p>{jobProfile}</p>
                <p>{ctcOffered} LPA</p>
              </div>
              <p className={styles.starting_date}>{startingDate.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        <Link to="/dashboard" className={styles.jd_link}>
          <FontAwesomeIcon icon={faLink} />
          <span> JD</span>
        </Link>
      </div>
      <div className={styles.separator} />
      <div className={styles.bottom_content}>
        <div className={styles.eligible_batches_list}>
          {eligibleBatches.map((batch) => {
            return <span key={batch}>{batch}</span>
          })}
        </div>
        <span>{type}</span>
      </div>
    </div>
  )
}

export default DrivesCard
