import { companyList, roleList } from '../../utils/Data/interviewExperienceData'
import { CompanyListProps, ModalProps, RoleListProps } from '../../utils/types'
import CheckListItem from '../CheckListItem'
import styles from './Modal.module.scss'

export default function Modal({ title, setIsModalOpen, filter }: ModalProps) {
  var totalCompanies=companyList.length
  var totalRoles=roleList.length
  return (
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
                  {filter===0?(<CheckListItem id={company.id} label={company.name} year={0} />):
                  (<CheckListItem id={company.id + totalCompanies} label={company.name} year={0} />)}
                </div>
              ))}
            {title === 'Role' &&
              roleList.map((role: RoleListProps) => (
                <div key={role.id} className={styles.grid_item}>
                  {filter===0?(<CheckListItem id={role.id} label={role.name} year={0} />):
                  (<CheckListItem id={role.id + totalRoles} label={role.name} year={0} />)}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
