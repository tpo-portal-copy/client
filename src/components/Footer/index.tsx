import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from '@chakra-ui/react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <h1 className={styles.content_heading}>NITH Links</h1>
            <div className={styles.content_body}>
              <Link href="https://nith.ac.in/">
                <h2>NITH Homepage</h2>
              </Link>
              <Link href="https://alumni.nith.ac.in/">
                <h2>Alumni Portal</h2>
              </Link>
              <Link href="https://nith.ac.in/training-placement">
                <h2>Placement Brochure</h2>
              </Link>
              <Link href="<h2>Media Coverage</h2>">
                <h2>Media Coverage</h2>
              </Link>
            </div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.content_heading}>For Companies</h1>
            <div className={styles.content_body}>
              <Link href="/drives">
                <h2>JNF Form</h2>
              </Link>
              <Link href="https://nith.ac.in/training-placement">
                <h2>Placement Procedure</h2>
              </Link>
            </div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.content_heading}>For Students</h1>
            <div className={styles.content_body}>
              <Link textDecoration="none" href="/student-details-form">
                <h2>Signup</h2>
              </Link>
              <Link href="/login">
                <h2>Login </h2>
              </Link>
              <Link href="/placement-policy">
                <h2>Placement Policy </h2>
              </Link>
              <Link href="https://nith.ac.in/bachelor-course-structure-syllabus">
                <h2>Courses</h2>
              </Link>
            </div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.content_heading}>Contact</h1>
            <div className={styles.content_body}>
              <h2>Office of the Training and Placement</h2>
              <h2>National Institute of Technology Hamirpur,</h2>
              <h2>Himachal Pradesh</h2>
              <h2>Phone no.: 01972-254591 </h2>
              <h2> Email: tpo@nith.ac.in </h2>
            </div>
          </div>
        </div>
        <div className={styles.bottom_content}>
          <div className={styles.social_media_links}>
            <Link href="https://www.facebook.com/nithamirpur/">
              <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
            </Link>
            <Link href="https://www.instagram.com/nit_hamirpur/">
              <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
            </Link>
            <Link href="https://www.linkedin.com/school/national-institute-of-technology-hamirpur/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
            </Link>
          </div>
          <h2>© Copyright 2023 TPO, NIT Hamirpur</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
