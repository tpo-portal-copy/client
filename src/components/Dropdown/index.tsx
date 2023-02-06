import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { ClusterType, DropdownProps } from '../../utils/types'
import clustersData from '../../utils/Data/clustersData'
import styles from './Dropdown.module.scss'

function Dropdown({ placeHolder }: DropdownProps) {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedCluster, setSelectedCluster] = useState('')
  useEffect(() => {
    const handler = () => setShowMenu(false)
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  })
  const handleInputClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setShowMenu(!showMenu)
  }
  const getDisplay = () => {
    if (!selectedCluster || selectedCluster.length === 0) {
      return placeHolder
    }
    return selectedCluster
  }

  const onItemClick = (select: ClusterType) => {
    setSelectedCluster(select.label)
  }

  const isSelected = (select: ClusterType) => {
    if (!selectedCluster) {
      return false
    }
    return selectedCluster === select.label
  }

  return (
    <div className={styles.dropdown_container}>
      <div className={styles.dropdown_input}>
        {showMenu && (
          <div className={styles.dropdown_menu}>
            {clustersData.map((cluster: ClusterType) => {
              return (
                <div
                  key={cluster.id}
                  className={`${styles.dropdown_item} ${isSelected(cluster) && styles.selected}`}
                >
                  <button
                    className={styles.cluster_label}
                    onClick={() => {
                      onItemClick(cluster)
                    }}
                  >
                    {cluster.label}
                  </button>
                </div>
              )
            })}
          </div>
        )}
        <div className={styles.dropdown_selected_value}>{getDisplay()}</div>
        <div className={styles.dropdown_tools}>
          <div className={styles.dropdown_tool}>
            <FontAwesomeIcon onClick={handleInputClick} icon={faArrowDown} size="lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
