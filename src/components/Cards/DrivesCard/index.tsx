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
      <div className={styles.separator} />
      <div className={styles.bottom_content}>
        <div className={styles.eligible_batches_list}>
          {eligibleBatches.map((batch) => {
            return (
              <div className={styles.eligible_batch} key={batch}>
                {batch}
              </div>
            )
          })}
        </div>
        <div className={styles.type}>{type}</div>
      </div>
    </div>
  )
}

export default DrivesCard
