import React, { useState } from 'react'

function MultiSelectDropdown() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

  const handleOptionToggle = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  return (
    <div>
      <h2>Select Multiple Options</h2>
      <select
        multiple
        value={selectedOptions}
        onChange={(e) => {
          const selected: string[] = Array.from(e.target.selectedOptions, (option) => option.value)
          setSelectedOptions(selected)
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div>
        Selected Options:
        <ul>
          {selectedOptions.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MultiSelectDropdown
