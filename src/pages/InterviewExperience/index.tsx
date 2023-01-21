import BasicCard from '../../components/Cards/BasicCard'
import styles from './InterviewExperience.module.scss'
import userIntExp from '../../utils/Data/IntExpData'
import { BasicCardProps } from '../../utils/types'

function InterviewExperience(): JSX.Element {
  return (
    <div>
      <div className={styles.display}>
        <div className={styles.middle_left}>
          <div className={styles.head}>
            <h3>Interview Experiences</h3>
          </div>
          <div className={styles.mlbody}>
            {userIntExp.map((user: BasicCardProps) => (
              <div key={user.id} className={styles.card_margins}>
                <BasicCard {...user} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.middle_right}>
          <div className={styles.head} />
          <div className={styles.mrbody}>
            <div className={styles.Filters}>
              <h2>Filters</h2>
              <div className={styles.seperator} />
              <div className={styles.company}>
                <h4>Companies</h4>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Role</h4>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Selection Status</h4>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Oppurtunity Year</h4>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Type</h4>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Difficulty</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right} />
      </div>
    </div>
  )
}

export default InterviewExperience
