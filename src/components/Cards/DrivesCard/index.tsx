import { Link } from 'react-router-dom'
import { Tag } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { DrivesCardProps } from '../../../utils/types'
import styles from './DrivesCard.module.scss'

function DrivesCard({
  companyName,
  imgUrl,
  ctcOffered,
  startingDate,
  modeOfHiring,
  ppt,
  aptitudeTest,
  jobLocation,
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
                <Tag>{jobProfile}</Tag>
                <Tag>{ctcOffered} LPA</Tag>
                <Tag className={styles.starting_date}>{startingDate.toLocaleDateString()} </Tag>
                <Tag>Mode of Hiring: {modeOfHiring}</Tag>
              </div>
              <div className={styles.company_info}>
                <Tag>PPT: {ppt}</Tag>
                <Tag>Aptitude Test: {aptitudeTest}</Tag>
                <Tag>Job Location: {jobLocation}</Tag>
              </div>
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
            return (
              <Tag backgroundColor="lightGrey" key={batch}>
                {batch}
              </Tag>
            )
          })}
        </div>
        <Tag backgroundColor="lightGrey">{type}</Tag>
      </div>
    </div>
  )
}

export default DrivesCard
