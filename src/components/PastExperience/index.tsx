import styles from "./PastExperience.module.scss";
import {PastExperienceData } from "../../utils/PastExperienceData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function PastExperience() {
  return (
    <div className={styles.item_contained}>
            <ul>
            {PastExperienceData.map((val,key) =>{
                return <li 
                key = {key}
                 onClick = {() => {window.location.pathname = val.link}}
                 className= {styles.list_item}
                 >
                    <div className={styles.student_data}>
                         <div className={styles.student_photo}><FontAwesomeIcon icon={faUser}  color = "grey"   size= "lg" fixedWidth/></div>
                         <div>
                             <div className={styles.student_name}> {val.studentName}</div>
                             <div className={styles.student_date}>{val.date}</div>
                         </div>
                    </div>
                </li>
            })}
         </ul>
        </div>
  )
}

export default PastExperience