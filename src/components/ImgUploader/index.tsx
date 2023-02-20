import { Input, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import styles from './ImgUploader.module.scss'

export default function ImgUploader() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.icon} icon={faCircleArrowUp} />
      <Text className={styles.txt}>Drag your image or click to upload</Text>
      <Input className={styles.inp} type="file" opacity="0" accept="image/*" />
    </div>
  )
}
