/* eslint-disable react/no-children-prop */
import { Link } from 'react-router-dom'
import styles from './Signup.module.scss'
import signupUI from '../../utils/Data/signupUIData'
import { Button, Input } from '../../components'

export default function Signup() {
  return (
    <form className={styles.container}>
      <div className={styles.info_container}>
        <span className={styles.heading}>Sign Up</span>
        <div className={styles.info}>
          {signupUI.map((data) => (
            <Input key={data.id} label={data.label} type={data.type} />
          ))}
          <Button stretch children="Sign Up" />
          <Link to="/login" className={styles.register}>
            Already Registered ?
          </Link>
        </div>
      </div>
    </form>
  )
}
