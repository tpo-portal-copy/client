import { Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, animated } from 'react-spring'
import { StatsCardProps } from '../../utils/types'
import styles from './StatsCard.module.scss'

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 1000,
    config: { mass: 1, tension: 20, friction: 10 },
  })
  return <animated.div>{number.to((num) => num.toFixed(0))}</animated.div>
}

export default function StatsCard({
  icon,
  bgColor,
  value,
  label,
  color,
  iconColor,
}: StatsCardProps) {
  return (
    <div style={{ backgroundColor: bgColor }} className={styles.stats}>
      <div className={styles.icon_container}>
        <FontAwesomeIcon
          style={{ background: color, color: iconColor }}
          className={styles.icon}
          icon={icon}
        />
      </div>
      <div className={styles.fields_container}>
        <Text className={styles.txt1}>
          <Number n={value} />
        </Text>
        <Text className={styles.txt2}>{label}</Text>
      </div>
    </div>
  )
}
