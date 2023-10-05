import React, { useState } from 'react'
import './FileUploader.scss'

function FileUploader({ data, onNameChange }) {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(event.target.value)
  }

  return (
    <div className="first-main">
      <div className="firstForm">
        <label htmlFor="input1" className="label1">
          Organization Name
          <input
            type="text"
            id="input-1"
            name="input-name"
            className="input1"
            placeholder="enter company name here"
            value={data.CompanyName}
            onChange={handleNameChange}
            required
          />
        </label>
      </div>
    </div>
  )
}

export default FileUploader
