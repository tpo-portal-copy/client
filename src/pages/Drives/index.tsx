import { Input, Select } from '@chakra-ui/react'
import { DrivesCardProps } from '../../utils/types'
import drivesData from '../../utils/Data/drivesData'
import { clusterData } from '../../utils/Data/formUIData'
import { DrivesCard } from '../../components/Cards'
import styles from './Drives.module.scss'

function Drives() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_name}>Drives</h1>
        <div className={styles.filter_container}>
          <div className={styles.dropdown}>
            <Select placeholder="Choose Cluster">
              {clusterData.map((cluster) => {
                return (
                  <option key={cluster.id} value={cluster.clusterName}>
                    {cluster.clusterName}
                  </option>
                )
              })}
            </Select>
          </div>
          <div className={styles.search_box}>
            <Input placeholder="Company" type="search" />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {drivesData.map((drive: any) => (
          <DrivesCard key={drive.id} {...drive} />
        ))}
      </div>
    </>
  )
}

export default Drives
