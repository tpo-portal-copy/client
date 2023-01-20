import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UpcomingDriveData } from '../../utils/UpcomingDriveData';
import styles from "./UpcomingDrive.module.scss";

function UpcomingDrive() {
  return <div>
  <ul>
  {UpcomingDriveData.map((val,key) =>{
      return <li 
      key = {key}
       onClick = {() => {window.location.pathname = val.link}}
       className={styles.list_item}
       >
          <div className= {styles.company_data}>
               <div className={styles.company_logo}><FontAwesomeIcon icon={faApple} color="lightBlue" size= "lg" fixedWidth/></div>
               <div className={styles.company_info}>
                   <div className={styles.company_name}> {val.companyName}</div>
                   <div className={styles.company_date}>{val.date}</div>
               </div>
          </div>
      </li>
  })}
</ul>
</div>
}

export default UpcomingDrive;