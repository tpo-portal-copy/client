/* eslint-disable react/no-children-prop */

import styles from './Profile.module.scss'
import FieldInfo from '../../components/FieldInfo'
import Button from '../../components/Button'

import profileData from '../../utils/Data/profileData'

function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.top_container}>
        <div className={styles.user_profile_info}>
          <img src="https://picsum.photos/100" className={styles.img} alt="Profile DP" />
          <div className={styles.info_container}>
            <p className={styles.name}>{profileData[0].name}</p>
            <div className={styles.sub_info_container}>
              {profileData.map((user) =>
                user.fields.map((user_field) => (
                  <FieldInfo
                    key={user_field.id}
                    label={user_field.label}
                    value={user_field.value}
                  />
                )),
              )}
            </div>
            <Button varient="primary" children="Edit Profile" />
          </div>
        </div>
        <div className={styles.upload_container}>
          <Button varient="primary" children="Upload Resume" />
          <p className={styles.file_name}>Resume_RollNo._Name.pdf</p>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.education}>
          <p className={styles.education_title}>Education Details</p>
          <span className={styles.label}>10th</span>
          <hr className={styles.separator} />
          <div className={styles.fields}>
            <FieldInfo label="Passing Year" value="2015" />
            <FieldInfo label="School" value="DAV Kangoo" />
            <FieldInfo label="Board" value="CBSE" />
            <FieldInfo label="Percentage" value="91%" />
          </div>
          <div className={styles.spacer} />

          <span className={styles.label}>12th</span>
          <hr className={styles.separator} />
          <div className={styles.fields}>
            <FieldInfo label="Passing Year" value="2019" />
            <FieldInfo label="School" value="DAV Kangoo" />
            <FieldInfo label="Board" value="CBSE" />
            <FieldInfo label="Percentage" value="91%" />
          </div>
        </div>
        <div className={styles.student_info} />
        <div className={styles.user_stats} />
        <div className={styles.cluster} />
      </div>
    </div>
  )
}

export default Profile
