import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Text } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import NotFound from '../../assets/animations/94729-not-found.json'
import { SlotDetailsCard } from '../../components/Cards'
import styles from './AllSlots.module.scss'
import Page500 from '../Page500'
import { Paginator } from '../../components'
import PageLoader from '../../components/PageLoader'

function AllSlots() {
  const [slots, setSlots] = useState([
    {
      id: nanoid(),
      title: 'Slot 1',
      description: 'This is slot 1',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      date: '2022-12-12',
    },
    {
      id: nanoid(),
      title: 'Slot 2',
      description: 'This is slot 2',
      startTime: '01:00 PM',
      endTime: '03:00 PM',
      date: '2022-12-12',
    },
    {
      id: nanoid(),
      title: 'Slot 2',
      description: 'This is slot 2',
      startTime: '01:00 PM',
      endTime: '03:00 PM',
      date: '2022-12-12',
    },
    {
      id: nanoid(),
      title: 'Slot 2',
      description: 'This is slot 2',
      startTime: '01:00 PM',
      endTime: '03:00 PM',
      date: '2022-12-12',
    },
    {
      id: nanoid(),
      title: 'Slot 2',
      description: 'This is slot 2',
      startTime: '01:00 PM',
      endTime: '03:00 PM',
      date: '2022-12-12',
    },
    {
      id: nanoid(),
      title: 'Slot 2',
      description: 'This is slot 2',
      startTime: '01:00 PM',
      endTime: '03:00 PM',
      date: '2022-12-12',
    },
    // Add more slots as needed
  ])

  const handleBookSlot = (selectedSlot: any) => {
    // Implement logic to book the selected slot
    console.log('Slot booked:', selectedSlot)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.page_name}>Slots</h1>
      <div className={styles.slot_booking_page}>
        <div className={styles.content}>
          {slots.length === 0 ? (
            <div className={styles.lottie_container}>
              <Text className={styles.heading}>Oops....</Text>
              <div className={styles.animation_container}>
                <Lottie animationData={NotFound} />
              </div>
            </div>
          ) : (
            <div className={styles.slot_list}>
              {slots.map((slot) => (
                <SlotDetailsCard key={slot.id} slot={slot} onBookSlot={handleBookSlot} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllSlots
