import styles from './UserInfo.module.scss'



interface UserInfoProps{
    label:string,
    value:string | number
}

export default function UserInfo({label,value}:UserInfoProps) {
    return <div className={styles.container}>
        <text className={styles.label}>
            {label} : 
        </text>
        <text className={styles.value}>
            {value}
        </text>
    </div>
}
