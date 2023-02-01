/* eslint-disable react/no-children-prop */
import { Link } from 'react-router-dom'
import styles from './Signup.module.scss'
import signupUI from '../../utils/Data/signupUIData'
import { Button, Input } from '../../components'

export default function Signup() {
  return (
    <form className={styles.container}>
      <div className={styles.info_container}>
        <img
          className={styles.heading}
          src="https://www.nicepng.com/png/detail/227-2273228_the-university-of-arizona-certifications-nit-hamirpur-logo.png"
          alt="The University Of Arizona Certifications - Nit Hamirpur Logo Png@nicepng.com"
        />
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
