import { PastExperience } from "../../components";
import { UpcomingDrive } from "../../components";
import styles from "./SidePane.module.scss";


function SidePane() {
  return (
      <div className={styles.container}>
        <div className={styles.item_contained}>
             <h1>Upcoming Drive</h1>
             <UpcomingDrive/>
      </div>
      <hr className={styles.horizontal_line}/>
      <div className={styles.item_contained}>
             <h1>Past Experience</h1>
             <PastExperience/>
      </div>
    </div>
  )
}

export default SidePane;