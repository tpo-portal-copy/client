import { useEffect, useState } from 'react'
import styles from './InterviewExperience.module.scss'
import userIntExp from '../../utils/Data/IntExpData'
import { BasicCardProps } from '../../utils/types'
import { BasicCard, Modal } from '../../components'
import CheckListItem from '../../components/Lists/CheckListItem'

function InterviewExperience(): JSX.Element {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [open])

  return (
    <div>
      <div className={styles.display}>
        <div className={styles.middle_left}>
          <div className={styles.head} />
          <div className={styles.mlbody}>
            <h1>Interview Experiences</h1>
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
                <div className={styles.chead}>
                  <div className={styles.tag}>
                    <h4>Companies</h4>
                  </div>
                  <div className={styles.modal}>
                    <button
                      className={styles.button}
                      onClick={() => {
                        setOpen(true)
                      }}
                    >
                      View All
                    </button>
                    {open && <Modal title="Company List" setIsModalOpen={setOpen} />}
                  </div>
                </div>
                <div>
                  <CheckListItem label="Amazon" year={0} />
                  <CheckListItem label="Samsung" year={0} />
                  <CheckListItem label="Wells Fargo" year={0} />
                  <CheckListItem label="Natwest" year={0} />
                </div>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Role</h4>
                <div>
                  <CheckListItem label="IT" year={0} />
                  <CheckListItem label="ECE Core" year={0} />
                  <CheckListItem label="Civil Core" year={0} />
                </div>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Selection Status</h4>
                <div>
                  <CheckListItem label="Selected" year={0} />
                  <CheckListItem label="Not Selected" year={0} />
                </div>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Oppurtunity Year</h4>
                <div>
                  <CheckListItem label="2019" year={0} />
                  <CheckListItem label="2020" year={0} />
                  <CheckListItem label="2021" year={0} />
                  <CheckListItem label="2022" year={0} />
                </div>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Type</h4>
                <div>
                  <CheckListItem label="Internship" year={0} />
                  <CheckListItem label="Full Time" year={0} />
                </div>
              </div>
              <div className={styles.seperator} />
              <div>
                <h4>Difficulty</h4>
                <div>
                  <CheckListItem label="Easy" year={0} />
                  <CheckListItem label="Medium" year={0} />
                  <CheckListItem label="Hard" year={0} />
                </div>
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
