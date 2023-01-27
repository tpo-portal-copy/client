import { ExperienceCardProps } from '../../../utils/types'
import styles from './ExperienceCard.module.scss'

function ExperienceCard({
  title,
  description,
  imgUrl,
  role,
  jobType,
  selStatus,
  userName,
  difficulty,
  postedOn,
}: ExperienceCardProps) {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.main_container}>
          <img src={imgUrl} className={styles.img} alt="profileDp" />
          <div className={styles.info_container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.role}>{role}</p>
            <p className={styles.truncate}>{description}</p>
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.lower}>
          <div className={styles.lower_fields}>
            <span>{selStatus}</span>
          </div>
          <div className={styles.lower_fields}>
            <span>{userName}</span>
          </div>
          <div className={styles.lower_fields}>
            <span>{jobType}</span>
          </div>
          <div className={styles.lower_fields}>
            <span>{difficulty}</span>
          </div>
          <div className={styles.lower_fields}>
            <span>{postedOn}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
