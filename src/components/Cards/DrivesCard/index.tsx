/* eslint-disable jsx-a11y/control-has-associated-label */
import { Tag, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCircleXmark, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'
import { DrivesCardProps } from '../../../utils/types'
import styles from './DrivesCard.module.scss'
import { getDataFromLocalStorage } from '../../../utils/functions'

const logo = '/nithLogo.png'

function DrivesCard({
  onClick,
  companyName,
  // imgUrl,
  ctcOffered,
  startingDate,
  modeOfHiring,
  driveID,
  isPpt,
  JobLocation,
  type,
  // eligibleBatches = [],
  jobProfile,
  driveStatus,
}: DrivesCardProps) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const toggleEditBar = () => {
    setIsEditOpen(!isEditOpen)
  }

  const handleStatusChange = async () => {
    const fData = {
      drive_status: driveStatus === 'Approved' ? 'Pending' : 'Approved',
      company: companyName,
      courses: ['B.Tech'],
      branches: ['cse'],
      jobLocation: JobLocation,
      starting_date: startingDate,
      session: '2023-24',
      job_type: type,
    }
    await fetch(`http://localhost:8000/drives/${driveID}`, {
      method: 'PUT',
      body: JSON.stringify(fData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => console.log(data))
  }

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.main_container} onClick={onClick}>
          <img className={styles.company_image} src={logo} alt="company Logo" />
          <div className={styles.content}>
            <p className={styles.header}>
              <img className={styles.company_image_mobile} src={logo} alt="company Logo" />
              <h2 className={styles.company_name}>{companyName}</h2>
            </p>
            <div className={styles.company_details}>
              <div className={styles.company_info_1}>
                <Tag className={styles.tag}>{jobProfile}</Tag>
                <Tag className={styles.tag}>{ctcOffered} LPA</Tag>
                <Tag className={styles.tag}>Job Type: {type}</Tag>
                <Tag className={styles.tag}>Mode of Hiring: {modeOfHiring}</Tag>
              </div>
              <div className={styles.company_info_1}>
                <Tag className={styles.tag}>Job Location: {JobLocation}</Tag>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.link}>
          {getDataFromLocalStorage('type') === 'tpo' && (
            <button className={styles.upcoming} onClick={handleStatusChange}>
              <span> {driveStatus === 'Pending' ? 'Approve' : 'Approved'}</span>
            </button>
          )}
        </div>

        <div className={styles.dropdown}>
          <div className={styles.ellipsis}>
            {isEditOpen ? (
              <>
                <Button background="blue.500" size="xs" className={styles.editBtn}>
                  <FontAwesomeIcon cursor="pointer" icon={faPen} />
                </Button>
                <Button background="red.500" size="xs" className={styles.editBtn}>
                  <FontAwesomeIcon cursor="pointer" icon={faCircleXmark} />
                </Button>
              </>
            ) : null}
            <button type="button" className={styles.gap} onClick={toggleEditBar}>
              <FontAwesomeIcon cursor="pointer" icon={faEllipsisH} />
            </button>
          </div>
        </div>
      </div>
      {/* <div className={styles.separator} /> */}
      {/* <div className={styles.bottom_content}>
        <div className={styles.eligible_batches_list}>
          {eligibleBatches.map((batch) => {
            return (
              <div className={styles.tag} key={batch.id}>
                <span>
                  {batch.course} {batch.branchName}
                </span>
              </div>
            )
          })}
          <div className={styles.tag}>
            <span>{type}</span>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default DrivesCard
