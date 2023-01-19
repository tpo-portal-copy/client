import styles from './Profile.module.scss'
import UserInfo from '../../components/UserInfo'

const data = [
  {
    name: 'Nikhil Thakur',
    fields: [
      {
        id: 1,
        label: 'Roll No.',
        value: '191089',
      },
      {
        id: 2,
        label: 'Branch',
        value: 'Electronics and Communication Engineering',
      },
      {
        id: 3,
        label: 'Batch',
        value: '2019',
      },
      {
        id: 4,
        label: 'Personal Email',
        value: '191089@nith.ac.in',
      },
      {
        id: 5,
        label: 'Current CGPI',
        value: '8.85',
      },
    ],
  },
]

function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.user_profile_info}>
        <img src="https://picsum.photos/100" className={styles.img} alt="profileDp" />
        <div className={styles.info_container}>
          <text className={styles.name}>{data[0].name}</text>
          <div className={styles.sub_info_container}>
            {data.map((json) =>
              json.fields.map((json_field) => (
                <UserInfo key={json_field.id} label={json_field.label} value={json_field.value} />
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
