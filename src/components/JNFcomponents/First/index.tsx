// App.tsx

import React, { useState } from 'react'
import FileUploader from './FileUploader'
// import FileUploader from './FileUploader'
import './App.scss'

function App({ parentState, setParentState }) {
  const handleNameChange = (name: string) => {
    setParentState({ ...parentState, companyName: name })
  }

  return (
    <div className="app">
      <FileUploader data={parentState} onNameChange={handleNameChange} />
    </div>
  )
}

export default App
