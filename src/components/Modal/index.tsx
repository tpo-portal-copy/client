import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { companyList, roleList } from '../../utils/Data/interviewExperienceData'
import { CompanyListProps, ModalProps, RoleListProps } from '../../utils/types'
import CheckListItem from '../CheckListItem'
import styles from './Modal.module.scss'

export default function CustomModal({
  title,
  isOpen,
  onCloseHandler,
  list,
  onItemClick,
}: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onCloseHandler}>
      <ModalOverlay />
      <ModalContent className={styles.content}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className={`${styles.grid_container} ${styles.companies}`}>
            {list.map((company: CompanyListProps) => (
              <div key={company.id} className={styles.grid_item}>
                <CheckListItem label={company.name} onClick={onItemClick} />
              </div>
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
