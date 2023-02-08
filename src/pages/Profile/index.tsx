import styles from './Profile.module.scss'
import { ClusterCard, Button, FieldInfo } from '../../components'

import {
  profileData,
  educationData,
  moreInfoData,
  studentStatData,
  clusterData,
} from '../../utils/Data/profileData'

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
            <Button onclick={() => console.log('clicked')} varient="primary">
              Edit Profile
            </Button>
          </div>
        </div>
        <div className={styles.upload_container}>
          <Button onclick={() => console.log('clicked')} varient="primary">
            Upload Resume
          </Button>
          <p className={styles.file_name}>Resume_RollNo._Name.pdf</p>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.education}>
          <p className={styles.education_title}>Education Details</p>

          {educationData.map((education) => {
            return (
              <div key={education.id}>
                <span className={styles.label}>{education.class}</span>
                <hr className={styles.separator} />
                <div>
                  {education.fields.map((fields) => (
                    <FieldInfo key={fields.id} label={fields.label} value={fields.value} />
                  ))}
                </div>
                <div className={styles.spacer} />
              </div>
            )
          })}
        </div>
        <div className={styles.more_info}>
          <p className={styles.more_info_title}>More About You</p>
          <div className={styles.info_fields_container}>
            {moreInfoData.map((info) => (
              <FieldInfo key={info.id} label={info.label} value={info.value} />
            ))}
          </div>
        </div>
        <div className={styles.user_stats}>
          <p className={styles.user_stats_title}>Student&#39;s Stats</p>
          <div className={styles.user_stats_fields_container}>
            {studentStatData.map((info) => (
              <FieldInfo key={info.id} label={info.label} value={info.value} />
            ))}
          </div>
          <div className={styles.profile}>
            <span className={styles.profile_link}>LinkedIn profile</span>
          </div>
        </div>
        <div className={styles.cluster}>
          <p className={styles.cluster_title}>Chosen Clusters</p>
          <div>
            {clusterData.map((data) => (
              <ClusterCard
                type="mark"
                key={data.id}
                title={data.cluster_title}
                range={data.range}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
