import { Button, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { PaginatorProps } from '../../utils/types'
import styles from './Paginator.module.scss'

export default function Paginator({
  curr,
  max,
  onNext,
  onPrev,
  disablePrev,
  disableNext,
}: PaginatorProps) {
  return (
    <div className={styles.container}>
      <Button isDisabled={disablePrev} colorScheme="blackAlpha" onClick={onPrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Text fontSize="md">
        {curr} of {max}
      </Text>
      <Button isDisabled={disableNext} colorScheme="blackAlpha" onClick={onNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </div>
  )
}
