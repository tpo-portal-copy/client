import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import styles from './RadioSelect.module.scss'
import { RadioSelectProps } from '../../utils/types'
import { BooleanValue } from '../../utils/constants'

export default function RadioSelect({ name, placeholder, onChange, value }: RadioSelectProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {placeholder}
      </label>
      <RadioGroup onChange={onChange} value={value}>
        <Stack direction="row" spacing={200}>
          <Radio value={BooleanValue.TRUE}>Yes</Radio>
          <Radio value={BooleanValue.FALSE}>No</Radio>
        </Stack>
      </RadioGroup>
    </div>
  )
}
