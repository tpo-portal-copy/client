import React, { useState } from 'react'
import FileUploader from './FileUploader'

function App({ parentState, handleParentStateChange }) {
  const handleNameChange = (name: string) => {
    handleParentStateChange((prevValue) => {
      return { ...prevValue, companyName: name }
    })
  }

  return (
    <div className="app">
      <FileUploader onNameChange={handleNameChange} />
    </div>
  )
}

export default App
