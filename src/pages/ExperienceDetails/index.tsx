import { useLocation } from 'react-router-dom'
import { interviewExperienceInfoList } from '../../utils/Data/interviewExperienceData'
import { ExperienceCardProps } from '../../utils/types'
import { RelatedExperienceCard } from '../../components/Cards'
import styles from './ExperienceDetails.module.scss'

function ExperienceDetails() {
  const { state } = useLocation()

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.name}>{state.title}</div>
          <div className={styles.role}>{state.role}</div>
        </div>
        <div className={styles.separator} />
        <div className={styles.attributes}>
          <div className={styles.tag}>&#8226; {state.difficulty}</div>
          <div className={styles.tag}>&#8226; {state.jobType}</div>
          <div className={styles.tag}>&#8226; {state.selStatus}</div>
          <div className={styles.tag}>&#8226; {state.postedOn}</div>
        </div>
        <div className={styles.separator} />
        <div className={styles.description}>
          <p>{state.description}</p>
        </div>
        <div className={styles.separator} />
        <div className={styles.lower}>
          <div>{state.userName}</div>
          <div>linkedin</div>
        </div>
      </div>
      <div className={styles.related_experiences}>
        <h3>Related Experiences</h3>
        <div className={styles.experiences}>
          {interviewExperienceInfoList.map((user: ExperienceCardProps) => (
            <RelatedExperienceCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceDetails
