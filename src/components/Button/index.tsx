import styles from './Button.module.scss'

export default function Button({ title }) {
  return (
    <div>
      <button type="button" className={styles.button}>
        {title}
      </button>
    </div>
  )
}
