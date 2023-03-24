import { useState } from 'react'
import Lottie from 'lottie-react'
import styles from './Profile.module.scss'
import { FieldInfo } from '../../components'

import { studentStatData } from '../../utils/Data/profileData'
import MAvatar from '../../assets/animations/131392-avatar.json'
import FAvatar from '../../assets/animations/131393-avatar-female.json'
import { ClusterCard } from '../../components/Cards'
import useStudentDetails from '../../hooks/useStudentDetails'
import PageLoader from '../../components/PageLoader'
import Page500 from '../Page500'
import { clustersAPI } from '../../utils/apis'
import { PlacementDataProps } from '../../utils/types'

function Profile() {
  const rn = '191008'
  const { data, isSuccess, isError, isLoading } = useStudentDetails(rn)
  const [placementData, setPlacementData] = useState<PlacementDataProps>({
    id: 0,
    student: '',
    cluster: {
      cluster_1_r: { cluster_id: 0, range: '' },
      cluster_2_r: { cluster_id: 0, range: '' },
      cluster_3_r: { cluster_id: 0, range: '' },
    },
    resume: '',
    undertaking: true,
  })
  const [isClusterDataFeteched, setIsClusterDataFetched] = useState(false)
  const [background, setBackground] = useState<number | null>(null)

  function getRandomCoverGradient(): string {
    let backgroundIdx = null
    if (background) {
      backgroundIdx = background
    } else {
      backgroundIdx = Math.round(Math.random() * (8 - 0) + 0)
      setBackground(backgroundIdx)
    }

    switch (backgroundIdx) {
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

  const getDetails = async (roll: string) => {
    try {
      const response = await clustersAPI.get(`/${roll}`)
      setPlacementData(response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return null
    }
  }

  if (isError) {
    return <Page500 />
  }

  if (isLoading || !isSuccess) {
    return <PageLoader />
  }

  if (isSuccess) {
    if (
      (data.eligibility.allowed_for === 'placement' || data.eligibility.allowed_for === 'both') &&
      data.eligibility.sitting &&
      !isClusterDataFeteched
    ) {
      getDetails(data.roll)
      setIsClusterDataFetched(true)
    }
  }

  const displayYear = (year: number) => {
    switch (year) {
      case 1:
        return '1st year'
      case 2:
        return '2nd year'
      case 3:
        return '3rd year'
      default:
        return `${data.current_year}th year`
    }
  }

  const displayGender = (gender: string) => {
    switch (gender) {
      case 'm':
        return 'Male'
      case 'f':
        return 'Female'
      default:
        return 'Other'
    }
  }

  let cluster1
  let cluster2
  let cluster3

  if (placementData.cluster) {
    const { cluster } = placementData
    const { cluster_1_r: cluster01, cluster_2_r: cluster02, cluster_3_r: cluster03 } = cluster
    cluster1 = cluster01
    cluster2 = cluster02
    cluster3 = cluster03
  }
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
              <span className={styles.name}>
                {data.middle_name === null
                  ? `${data.first_name} ${data.last_name}`
                  : `${data.first_name} ${data.middle_name} ${data.last_name}`}
              </span>
              <span className={styles.roll}>{`${data.course_name} ${data.branch} ${displayYear(
                data.current_year,
              )}`}</span>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.college_container}>
            <p className={styles.college_title}>College</p>
            <div className={styles.sub_info_container}>
              <FieldInfo label="Roll No" value={data.roll} />
              <FieldInfo label="Branch" value={data.branch_fullname} />
              <FieldInfo label="Batch" value={data.batch_year} />
              <FieldInfo label="Personal Email" value={data.personal_email} />
              <FieldInfo label="Current CGPI" value={data.cgpi} />
              <FieldInfo label="College Email" value={data.college_email} />
              <FieldInfo label="Gender" value={displayGender(data.gender)} />
              <FieldInfo label="Mobile No" value={data.pnumber} />
              <FieldInfo label="Course" value={data.course} />
              <FieldInfo label="Date of Birth" value={data.dob} />
              <FieldInfo label="Category" value={data.category} />
              <FieldInfo label="Active Backlog(s)" value={data.active_backlog} />
              <FieldInfo label="Total Backlog(s)" value={data.total_backlog} />
            </div>
          </div>
          <div className={styles.recent_experiences}>
            <span className={styles.message}>No experience posted </span>
          </div>
          <div className={styles.education}>
            <p className={styles.education_title}>Education</p>
            <div>
              <span className={styles.label}>10th</span>
              <hr className={styles.separator} />
              <div>
                <FieldInfo label="Passing Year" value={data.class_10_year} />
                <FieldInfo label="School" value={data.class_10_school} />
                <FieldInfo label="Board" value={data.class_10_board} />
                <FieldInfo label="Percentage" value={data.class_10_perc} />
              </div>
              <div className={styles.spacer} />
            </div>

            <div>
              <span className={styles.label}>12th</span>
              <hr className={styles.separator} />
              <div>
                <FieldInfo label="Passing Year" value={data.class_12_year} />
                <FieldInfo label="School" value={data.class_12_school} />
                <FieldInfo label="Board" value={data.class_12_board} />
                <FieldInfo label="Percentage" value={data.class_12_perc} />
              </div>
              <div className={styles.spacer} />
            </div>
          </div>
          <div className={styles.sub_container}>
            <div className={styles.cluster_container}>
              <p className={styles.cluster_title}>Chosen Clusters</p>
              {(data.eligibility.allowed_for === 'placement' ||
                data.eligibility.allowed_for === 'both') &&
                data.eligibility.sitting &&
                Object.keys(placementData).length !== 0 && (
                  <div className={styles.cluster_field_container}>
                    <ClusterCard
                      title={`Cluster ${cluster1?.cluster_id}`}
                      range={cluster1?.range === undefined ? '' : cluster1.range}
                    />
                    <ClusterCard
                      title={`Cluster ${cluster2?.cluster_id}`}
                      range={cluster2?.range === undefined ? '' : cluster2.range}
                    />
                    <ClusterCard
                      title={`Cluster ${cluster3?.cluster_id}`}
                      range={cluster3?.range === undefined ? '' : cluster3.range}
                    />
                  </div>
                )}

              {(data.eligibility.allowed_for === 'placement' ||
                data.eligibility.allowed_for === 'both') &&
                data.eligibility.sitting === false && (
                  <div className={styles.cluster_field_container}>
                    <p>Not Interested in Placement</p>
                    <p>Reason : {data.eligibility.reason.toLocaleUpperCase()}</p>
                  </div>
                )}

              {(data.eligibility.allowed_for === 'NA' ||
                data.eligibility.allowed_for === 'intern') && (
                <div className={styles.cluster_field_container}>Not Applicable</div>
              )}
            </div>
            <div className={styles.stats_container}>
              <p className={styles.user_stats_title}>Student&#39;s Stats</p>
              <div className={styles.user_stats_fields_container}>
                {studentStatData.map((info) => (
                  <FieldInfo key={info.id} label={info.label} value={info.value} />
                ))}
              </div>
              <div className={styles.profile}>
                <a href={data.linkedin} className={styles.profile_link}>
                  LinkedIn profile
                </a>
              </div>
            </div>
            <div className={styles.address_container}>
              <p className={styles.address_title}>Competitive Exams</p>
              <div className={styles.address_fields_container}>
                <FieldInfo
                  label="Gate Score"
                  value={data.gate_score === null ? 'Not Appeared' : data.gate_score}
                />
                <FieldInfo
                  label="CAT Percentile"
                  value={data.cat_score === null ? 'Not Appeared' : data.cat_score}
                />
                <FieldInfo label="JEE Main Rank" value={data.jee_mains_rank} />
              </div>
            </div>

            <div className={styles.address_container}>
              <p className={styles.address_title}>Address</p>
              <div className={styles.address_fields_container}>
                <FieldInfo label="City" value={data.city} />
                <FieldInfo label="State" value={data.state} />
                <FieldInfo label="Pincode" value={data.pincode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
