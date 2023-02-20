import Lottie from 'lottie-react'
import styles from './Profile.module.scss'
import { FieldInfo } from '../../components'

import {
  profileData,
  educationData,
  moreInfoData,
  studentStatData,
  clusterData,
  addressData,
  competitiveData,
} from '../../utils/Data/profileData'
import MAvatar from '../../assets/animations/131392-avatar.json'
import FAvatar from '../../assets/animations/131393-avatar-female.json'
import { ClusterCard } from '../../components/Cards'

function getRandomCoverGradient(): string {
  const random = Math.round(Math.random() * (8 - 0) + 0)

  switch (random) {
    case 1:
      return 'linear-gradient(120deg,#f6d365 0,#fda085 100%)'
    case 2:
      return 'linear-gradient(to top,#fbc2eb 0,#a6c1ee 100%)'
    case 3:
      return 'linear-gradient(to top,#ff9a9e 0,#fecfef 99%,#fecfef 100%)'
    case 4:
      return 'linear-gradient(to right, rgb(116, 235, 213), rgb(172, 182, 229))'
    case 5:
      return 'linear-gradient(to right, rgb(102, 125, 182), rgb(0, 130, 200), rgb(0, 130, 200), rgb(102, 125, 182))'
    case 6:
      return 'linear-gradient(to right, rgb(6, 190, 182), rgb(72, 177, 191))'
    case 7:
      return 'linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224))'
    default:
      return 'linear-gradient(to right, rgb(58, 28, 113), rgb(215, 109, 119), rgb(255, 175, 123))'
  }
}

function Profile() {
  return (
    <>
      <h1 className={styles.page_name}>Profile</h1>
      <div className={styles.master_container}>
        <div className={styles.profile_header_container}>
          <div className={styles.profile_header}>
            <div className={styles.profile_content}>
              <div style={{ background: getRandomCoverGradient() }} className={styles.cover_img} />
              <Lottie
                className={styles.profile_img}
                width="150px"
                height="150px"
                animationData={MAvatar}
              />
            </div>
            <div className={styles.student_name_container}>
              <span className={styles.name}>{profileData[0].name}</span>
              <span className={styles.roll}>Have some fun</span>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.college_container}>
            <p className={styles.college_title}>College</p>
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

              {moreInfoData.map((info) => (
                <FieldInfo key={info.id} label={info.label} value={info.value} />
              ))}
            </div>
          </div>
          <div className={styles.recent_experiences}>
            <span className={styles.message}>No experience posted </span>
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
          <div className={styles.sub_container}>
            <div className={styles.cluster_container}>
              <p className={styles.cluster_title}>Chosen Clusters</p>
              {clusterData.map((data) => (
                <ClusterCard key={data.id} title={data.cluster_title} range={data.range} />
              ))}
            </div>
            <div className={styles.stats_container}>
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
            <div className={styles.address_container}>
              <p className={styles.address_title}>Competitive Exams</p>
              <div className={styles.address_fields_container}>
                {competitiveData.map((info) => (
                  <FieldInfo key={info.id} label={info.label} value={info.value} />
                ))}
              </div>
            </div>

            <div className={styles.address_container}>
              <p className={styles.address_title}>Address</p>
              <div className={styles.address_fields_container}>
                {addressData.map((info) => (
                  <FieldInfo key={info.id} label={info.label} value={info.value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
