/* eslint-disable react/no-children-prop */
import { Link } from 'react-router-dom'
import styles from './Login.module.scss'
import loginUI from '../../utils/Data/loginUIData'
import Input from '../../components/Input'
import { Button } from '../../components'



export default function Login() {
  return (
    <form className={styles.container}>
      <div className={styles.info_container}>
        <span className={styles.heading}>Login</span>
        <div className={styles.info}>
          {loginUI.map((data) => (
            <Input key={data.id} label={data.label} type={data.type} />
          ))}
          <span className={styles.forgot}>Forgot Password</span>
          <Button stretch children="Login" />
          <Link to="/signup" className={styles.register}>
            New User ?
          </Link>
        </div>
      </div>
    </form>
  )
}
