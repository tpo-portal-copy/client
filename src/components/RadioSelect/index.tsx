import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import styles from './RadioSelect.module.scss'
import { RadioSelectProps } from '../../utils/types'

export default function RadioSelect({ name, placeholder, onChange, value }: RadioSelectProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {placeholder}
      </label>
      <RadioGroup onChange={onChange} value={value}>
        <Stack direction="row" spacing={200}>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Stack>
      </RadioGroup>
    </div>
  )
}
