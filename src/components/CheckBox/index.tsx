import styles from './CheckBox.module.scss'

function CheckBox(): JSX.Element {
  return (
    <div className={styles.content}>
      <label htmlFor='ch1' className={styles.checkBox}>
        <input id="ch1" type="checkbox" />
        <div className={styles.transition} />
      </label>
    </div>
  )
}

export default CheckBox
