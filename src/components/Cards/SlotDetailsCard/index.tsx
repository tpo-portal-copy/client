import React from 'react'
import { Slot } from '../../../utils/types'
import styles from './SlotDetailsCard.module.scss'

function SlotCard({
  slot,
  onBookSlot,
  onClick,
}: {
  slot: Slot
  onBookSlot: (slot: Slot) => void
  onClick: () => void
}) {
  return (
    <div className={styles['slot-card']}>
      <div onClick={onClick}>
        <div className={styles['profile-pic']}>
          <img src="profile-pic-url.jpg" alt="User Profile" className={styles['profile-pic-img']} />
          <h3>{slot.title}</h3>
        </div>
        <div className={styles['slot-details']}>
          <p> {slot.description}</p>
          <p>Start Time: {slot.startTime}</p>
          <p>End Time: {slot.endTime}</p>
        </div>
      </div>
      <div className={styles.center}>
        <button onClick={() => onBookSlot(slot)} className={styles['book-button']}>
          Book Slot
        </button>
      </div>
    </div>
  )
}

export default SlotCard
