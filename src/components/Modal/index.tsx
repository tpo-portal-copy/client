import { companyList, roleList } from '../../utils/Data/interviewExperienceData'
import { CompanyListProps, ModalProps, RoleListProps } from '../../utils/types'
import CheckListItem from '../CheckListItem'
import styles from './Modal.module.scss'

export default function Modal({ title, setIsModalOpen }: ModalProps) {
  return (
    <div>
      <div className={styles.modalbg}>
        <div className={styles.modal}>
          <button onClick={() => setIsModalOpen(false)} className={styles.close}>
            &times;
          </button>
          <div className={styles.head}>
            <h1>{title} </h1>
          </div>
          <div className={styles.seperator} />
          <div className={styles.body}>
            <div className={styles.grid_container}>
              {title === 'Company' &&
                companyList.map((company: CompanyListProps) => (
                  <div key={company.id} className={styles.grid_item}>
                    <CheckListItem id={company.id} label={company.name} year={0} />
                  </div>
                ))}
              {title === 'Role' &&
                roleList.map((role: RoleListProps) => (
                  <div key={role.id} className={styles.grid_item}>
                    <CheckListItem id={role.id} label={role.name} year={0} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
