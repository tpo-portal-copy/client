import styles from './DarkProfile.module.scss'
import { ClusterCard, Button, FieldInfo } from '../../components'
import {
  profileData,
  educationData,
  moreInfoData,
  studentStatData,
  clusterData,
} from '../../utils/Data/profileData'

export default function DarkProfile() {
  return (
    <>
      <h1 className={styles.page_name}>Dashboard</h1>
      <div className={styles.container}>
        <div className={styles.info_container}>
          <p className={styles.name}>{profileData[0].name}</p>
          <div className={styles.sub_info_container}>
            {profileData.map((user) =>
              user.fields.map((user_field) => (
                <FieldInfo key={user_field.id} label={user_field.label} value={user_field.value} />
              )),
            )}

            {moreInfoData.map((info) => (
              <FieldInfo key={info.id} label={info.label} value={info.value} />
            ))}
          </div>
        </div>
        <div className={styles.recent_experiences}>
          <span className={styles.message}>You have not posted any experience yet </span>
        </div>
        <div className={styles.education}>
          <p className={styles.education_title}>Education</p>
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
        <div className={styles.div4}>
          <div className={styles.div5}>
            <p className={styles.cluster_title}>Chosen Clusters</p>
            {clusterData.map((data) => (
              <ClusterCard
                type="mark"
                key={data.id}
                title={data.cluster_title}
                range={data.range}
              />
            ))}
          </div>
          <div className={styles.div6}>
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
        </div>
      </div>
    </>
  )
}
