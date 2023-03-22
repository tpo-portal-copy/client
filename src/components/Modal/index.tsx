import {
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useState } from 'react'
import { CompanyListProps, ModalProps } from '../../utils/types'
import CheckListItem from '../CheckListItem'
import styles from './Modal.module.scss'

export default function CustomModal({
  title,
  isOpen,
  onCloseHandler,
  list = [],
  onItemClick,
  selectedItems,
}: ModalProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: any) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  const filteredItems = list.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <Modal isOpen={isOpen} onClose={onCloseHandler}>
      <ModalOverlay />
      <ModalContent className={styles.content}>
        <ModalHeader>
          <p>{title}</p>
          <Input
            value={searchTerm}
            onChange={handleSearch}
            placeholder={`Search ${title}`}
            type="search"
            maxW="300"
            marginTop="4"
          />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className={`${styles.grid_container} ${styles.companies}`}>
            {filteredItems.map((company: CompanyListProps) => (
              <div key={company.id} className={styles.grid_item}>
                <CheckListItem
                  label={company.name}
                  onClick={onItemClick}
                  isChecked={selectedItems.includes(company.name)}
                />
              </div>
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
