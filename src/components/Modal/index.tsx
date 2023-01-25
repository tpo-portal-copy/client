import { TransitionModalProps } from '../../utils/types'
import styles from './Modal.module.scss'

export default function Modal({ title, setIsModalOpen }: TransitionModalProps) {
  return (
    <div>
      <div className={styles.modalbg}>
        <p>hello</p>
        <div className={styles.modal}>
          <button onClick={() => setIsModalOpen(false)} className={styles.close}>
            &times;
          </button>
          <div className={styles.head}>
            <h1>{title}</h1>
          </div>
          <div className={styles.seperator} />
          <div className={styles.body} />
          <div className={styles.footer}>
            {/* <div className={styles.button}>
              <button>Clear</button>
            </div>
            <div className={styles.button}>
              <button>Apply</button>
            </div>
            <div className={styles.button}>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
