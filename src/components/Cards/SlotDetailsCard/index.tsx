import React from 'react'
import { Slot } from '../../../utils/types'
import styles from './SlotDetailsCard.module.scss'

function SlotCard({ slot, onBookSlot }: { slot: Slot; onBookSlot: (slot: Slot) => void }) {
  return (
    <div className={styles['slot-card']}>
      <div className={styles['profile-pic']}>
        <img src="profile-pic-url.jpg" alt="User Profile" className={styles['profile-pic-img']} />
      </div>
      <div className={styles['slot-details']}>
        <h3>{slot.title}</h3>
        <p>Description: {slot.description}</p>
        <p>Start Time: {slot.startTime}</p>
        <p>End Time: {slot.endTime}</p>
        <button onClick={() => onBookSlot(slot)} className={styles['book-button']}>
          Book Slot
        </button>
      </div>
    </div>
  )
}

export default SlotCard
