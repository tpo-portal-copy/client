import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DrivesCard from '../../components/Cards/DrivesCard'
import styles from './Drives.module.scss'
import { DrivesCardProps } from '../../utils/types'
import drivesData from '../../utils/Data/drivesData'
import Dropdown from '../../components/Dropdown'

function Drives() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_name}>Drives</h1>
        <div className={styles.filter_container}>
          <div className={styles.dropdown}>
            <Dropdown placeHolder="Select..." />
          </div>
          <div className={styles.search_box}>
            <FontAwesomeIcon icon={faSearch} size="sm" className={styles.input_icon} />
            <input placeholder="Company..." type="text" name="text" className={styles.input} />
          </div>
        </div>
      </div>
      <div className={styles.display}>
        {drivesData.map((drive: DrivesCardProps) => (
          <div key={drive.id} className={styles.card_margins}>
            <DrivesCard {...drive} />
          </div>
        ))}
      </div>
    </>
  )
}
export default Drives
