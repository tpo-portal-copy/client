import { Link } from 'react-router-dom'
import { interviewExperienceInfoList } from '../../../utils/Data/interviewExperienceData'
import { ExperienceCardProps } from '../../../utils/types'
import styles from './ExperienceCard.module.scss'

function ExperienceCard({
  id,
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
    <Link
      to={`/experience-details/${id}`}
      state={interviewExperienceInfoList[id]}
      className={styles.link}
    >
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
        <div className={styles.tags_container}>
          <div className={styles.tag}>
            <span>{selStatus}</span>
          </div>
          <div className={styles.tag}>
            <span>{userName}</span>
          </div>
          <div className={styles.tag}>
            <span>{jobType}</span>
          </div>
          <div className={styles.tag}>
            <span>{difficulty}</span>
          </div>
          <div className={styles.tag}>
            <span>{postedOn}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ExperienceCard
