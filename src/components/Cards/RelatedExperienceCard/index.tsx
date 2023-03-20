import { Link } from 'react-router-dom'
import { interviewExperienceInfoList } from '../../../utils/Data/interviewExperienceData'
import { fromNow, getDifficulty } from '../../../utils/functions'
import { ExperienceCardProps } from '../../../utils/types'
import styles from './RelatedExperienceCard.module.scss'

function ExperienceCard({
  id,
  company,
  roles,
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
          <div className={styles.info_container}>
            <p className={styles.title}>{company}</p>
            <p className={styles.role}>{roles}</p>
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.tags_container}>
          {selected && (
            <div className={styles.tag}>
              <span>Selected</span>
            </div>
          )}
          <div className={styles.tag}>
            {anonymity ? <span>Anonymous</span> : <span>{name?.name}</span>}
          </div>
          <div className={styles.tag}>
            <span>{getDifficulty(difficulty)}</span>
          </div>
          <div className={styles.tag}>
            <span>{fromNow(new Date(created_at))}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ExperienceCard
