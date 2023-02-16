import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import CheckListItem from '../CheckListItem'
import Modal from '../Modal'
import { ExperienceFilterProps } from '../../utils/types'
import styles from './ExperiencesFilters.module.scss'

function ExperiencesFilters({ isMobile = false }: ExperienceFilterProps) {
  const [isCompaniesModalOpen, setIsCompaniesModalOpen] = useState(false)
  const [isRolesModalOpen, setIsRolesModalOpen] = useState(false)

  const openCompaiesModal = () => {
    setIsCompaniesModalOpen(true)
  }

  const closeCompaniesModal = () => {
    setIsCompaniesModalOpen(false)
  }

  const openRolesModal = () => {
    setIsRolesModalOpen(true)
  }

  const closeRolesModal = () => {
    setIsRolesModalOpen(false)
  }

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
            <button className={styles.btn} onClick={openCompaiesModal}>
              View All
              <FontAwesomeIcon icon={faCircleRight} />
            </button>
            {isCompaniesModalOpen && (
              <Modal
                title="Companies"
                isOpen={isCompaniesModalOpen}
                onCloseHandler={closeCompaniesModal}
              />
            )}
          </div>
        </div>
        <div>
          <CheckListItem label="Amazon" isMobile={isMobile} />
          <CheckListItem label="Samsung" isMobile={isMobile} />
          <CheckListItem label="Wells Fargo" isMobile={isMobile} />
          <CheckListItem label="Natwest" isMobile={isMobile} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <div className={styles.filter_head}>
          <div className={styles.tag}>
            <h4>Roles</h4>
          </div>
          <div className={styles.modal}>
            <button className={styles.btn} onClick={openRolesModal}>
              View All
              <FontAwesomeIcon icon={faCircleRight} />
            </button>
            {isRolesModalOpen && (
              <Modal title="Roles" isOpen={isRolesModalOpen} onCloseHandler={closeRolesModal} />
            )}
          </div>
        </div>
        <div>
          <CheckListItem label="IT" isMobile={isMobile} />
          <CheckListItem label="ECE Core" isMobile={isMobile} />
          <CheckListItem label="Civil Core" isMobile={isMobile} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Selection Status</h4>
        <div>
          <CheckListItem label="Selected" isMobile={isMobile} />
          <CheckListItem label="Not Selected" isMobile={isMobile} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Oppurtunity Year</h4>
        <div>
          <CheckListItem label="2019" isMobile={isMobile} />
          <CheckListItem label="2020" isMobile={isMobile} />
          <CheckListItem label="2021" isMobile={isMobile} />
          <CheckListItem label="2022" isMobile={isMobile} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Type</h4>
        <div>
          <CheckListItem label="Internship" isMobile={isMobile} />
          <CheckListItem label="Full Time" isMobile={isMobile} />
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Difficulty</h4>
        <div>
          <CheckListItem label="Easy" isMobile={isMobile} />
          <CheckListItem label="Medium" isMobile={isMobile} />
          <CheckListItem label="Hard" isMobile={isMobile} />
        </div>
      </div>
    </div>
  )
}

export default ExperiencesFilters
