import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { InterviewExperienceFIltersProps } from '../../utils/types'
import CheckListItem from '../CheckListItem'
import Modal from '../Modal'
import styles from './InterviewExperienceFIlters.module.scss'

function InterviewExperienceFIlters({ setter }: InterviewExperienceFIltersProps) {
  const [openCompany, setOpenCompany] = useState(false)
  const [openRole, setOpenRole] = useState(false)

  return (
    <div className={styles.filters}>
      <h2>Filters</h2>
      <div className={styles.seperator} />
      <div className={styles.company}>
        <div className={styles.filter_head}>
          <div className={styles.tag}>
            <h4>Companies</h4>
          </div>
          <div className={styles.modal}>
            <button
              className={styles.btn}
              onClick={() => {
                setOpenCompany(true)
              }}
            >
              View All
              <FontAwesomeIcon icon={faCircleRight} />
            </button>
            {openCompany && <Modal title="Company" setIsModalOpen={setOpenCompany} filter={setter} />}
          </div>
        </div>
        <div>
          <CheckListItem label="Amazon" year={0} id={0 + setter} />
          <CheckListItem label="Samsung" year={0} id={1 + setter} />
          <CheckListItem label="Wells Fargo" year={0} id={2 + setter} />
          <CheckListItem label="Natwest" year={0} id={3 + setter} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <div className={styles.filter_head}>
          <div className={styles.tag}>
            <h4>Roles</h4>
          </div>
          <div className={styles.modal}>
            <button
              className={styles.btn}
              onClick={() => {
                setOpenRole(true)
              }}
            >
              View All
              <FontAwesomeIcon icon={faCircleRight} />
            </button>
            {openRole && <Modal title="Role" setIsModalOpen={setOpenRole} filter={setter} />}
          </div>
        </div>
        <div>
          <CheckListItem label="IT" year={0} id={4 + setter} />
          <CheckListItem label="ECE Core" year={0} id={5 + setter} />
          <CheckListItem label="Civil Core" year={0} id={6 + setter} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4>Selection Status</h4>
        <div>
          <CheckListItem label="Selected" year={0} id={7 + setter} />
          <CheckListItem label="Not Selected" year={0} id={8 + setter} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4>Oppurtunity Year</h4>
        <div>
          <CheckListItem label="2019" year={0} id={9 + setter} />
          <CheckListItem label="2020" year={0} id={10 + setter} />
          <CheckListItem label="2021" year={0} id={11 + setter} />
          <CheckListItem label="2022" year={0} id={12 + setter} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4>Type</h4>
        <div>
          <CheckListItem label="Internship" year={0} id={13 + setter} />
          <CheckListItem label="Full Time" year={0} id={14 + setter} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4>Difficulty</h4>
        <div>
          <CheckListItem label="Easy" year={0} id={15 + setter} />
          <CheckListItem label="Medium" year={0} id={16 + setter} />
          <CheckListItem label="Hard" year={0} id={17 + setter} />
        </div>
      </div>
    </div>
  )
}

export default InterviewExperienceFIlters
