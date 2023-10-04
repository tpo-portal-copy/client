import React from 'react'
import styles from './JNFForm.module.scss'

interface UtilProps {
  branchName: string
}

function Util({ branchName }: UtilProps) {
  return (
    <div className={`${styles.row}`}>
      <div className={`${styles.col_3_1}`}>{branchName}</div>
      <div className={`${styles.col_3_2}`}>
        <input type="checkbox" />
      </div>
    </div>
  )
}

export default Util
