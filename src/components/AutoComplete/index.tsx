import { SetStateAction, useState } from 'react'
import styles from './AutoComplete.module.scss'

export default function AutoComplete() {
  const [value, setValue] = useState('')

  const onChange = (event: { target: { value: SetStateAction<string> } }) => {
    setValue(event.target.value)
  }

  const onSearch = (searchTerm: SetStateAction<string>) => {
    setValue(searchTerm)
  }

  return (
    <div className={styles.app}>
      <div className={styles.search_container}>
        <div className={styles.inner}>
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        {/* <div className={styles.dropdown}>
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase()
              const fullName = item.full_name.toLowerCase()

              return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className={styles.dropdown_row}
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div> */}
      </div>
    </div>
  )
}
