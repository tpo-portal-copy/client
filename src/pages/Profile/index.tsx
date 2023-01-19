import styles from './Profile.module.scss'
import UserInfo from '../../components/UserInfo'


const arr = [
  {
    name:"Nikhil Thakur",
    fields :[
      {
        id:1,
        label:"Roll No.",
        value:"191089"
      },{
        id:2,
        label:"Branch",
        value:"Electronics and Communication Engineering"
      },
      {
        id:3,
        label:"Batch",
        value:"2019"
      },
      {
        id:4,
        label:"Personal Email",
        value:"191089@nith.ac.in"
      },
      {
        id:5,
        label:"Current CGPI",
        value:"8.85"
      }
    ]
  }
]

function Profile() {
  return (
    <div style={{ backgroundColor:"#fffefe", height: '100%' }}>
      <div className={styles.user_profile_info}>
        <img src="https://picsum.photos/100" className={styles.img} alt="profileDp" />
        <div className={styles.info_container}>
          <text className={styles.name}>{arr[0].name}</text>
          <div className={styles.sub_info_container}>
            {arr.map(i=>
              i.fields.map(j => <UserInfo key={j.id} 
                label={j.label} value={j.value}/>)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
