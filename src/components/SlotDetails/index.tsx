/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react'
import {
  faFileArrowDown,
  faCircleChevronDown,
  faCircleChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SlotDetails.module.scss'
import { getDataFromLocalStorage } from '../../utils/functions'
import { Slot } from '../../utils/types'

function SlotDetails(props: Slot) {
  const { title, description, startTime, endTime, date, createdBy, contact_email, contact_number } =
    props
  return (
    <div className={styles.details}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <table className="job-table">
        <tbody>
          <tr>
            <td className={styles.propperty}>description</td>
            <td className={styles.value}>{description}</td>
          </tr>
          <tr>
            <td className={styles.propperty}>Start Time</td>
            <td className={styles.value}>{startTime}</td>
          </tr>
          <tr>
            <td className={styles.propperty}>End Time</td>
            <td className={styles.value}>{endTime}</td>
          </tr>
          <tr>
            <td className={styles.propperty}>Date</td>
            <td className={styles.value}>{date}</td>
          </tr>
          <tr>
            <td className={styles.propperty}>Created By</td>
            <td className={styles.value}>{createdBy}</td>
          </tr>

          <tr>
            <td className={styles.propperty}>Contact Email</td>
            <td className={styles.value}>{contact_email}</td>
          </tr>

          <tr>
            <td className={styles.propperty}>Contact Number</td>
            <td className={styles.value}>{contact_number}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SlotDetails
