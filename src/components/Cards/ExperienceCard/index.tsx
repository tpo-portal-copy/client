import { Link } from 'react-router-dom'
import { interviewExperienceInfoList } from '../../../utils/Data/interviewExperienceData'
import { getDifficulty } from '../../../utils/functions'
import { ExperienceCardProps } from '../../../utils/types'
import styles from './ExperienceCard.module.scss'

function ExperienceCard({
  id,
  company,
  description_read,
  roles,
  jobtype,
  selected,
  name,
  difficulty,
  created_at,
  anonymity,
}: ExperienceCardProps) {
  return (
    <Link
      to={`/experiences-details/${id}`}
      state={interviewExperienceInfoList[id]}
      className={styles.link}
    >
      <div className={styles.card}>
        <div className={styles.main_container}>
          {anonymity ? (
            <img className={styles.anonymous_img} src="/anonymous_pic.jpg" alt="Anonymous" />
          ) : (
            <img src={name?.logo} className={styles.img} alt="profileDp" />
          )}
          <div className={styles.info_container}>
            <p className={styles.title}>{company}</p>
            <p className={styles.role}>{roles}</p>
            <div
              className={styles.truncate}
              dangerouslySetInnerHTML={{ __html: description_read }}
            />
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.tags_container}>
          {selected && (
            <div className={styles.tag}>
              <span>Selected</span>
            </div>
          )}
          {anonymity ? (
            <div className={styles.tag}>
              <span>Anonymous</span>
            </div>
          ) : (
            <div className={styles.tag}>
              <span>{name?.name}</span>
            </div>
          )}
          <div className={styles.tag}>
            <span>{jobtype}</span>
          </div>
          <div className={styles.tag}>
            <span>{getDifficulty(difficulty)}</span>
          </div>
          <div className={styles.tag}>
            <span>{new Date(created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ExperienceCard
