// App.tsx

import React, { useState } from 'react'
import FileUploader from './FileUploader'
// import FileUploader from './FileUploader'
import './App.scss'

function App() {
  const [organizationName, setOrganizationName] = useState<string>('')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleNameChange = (name: string) => {
    setOrganizationName(name)
  }

  const handleFilesChange = (files: File[]) => {
    setSelectedFiles(files)
  }

  return (
    <div className="app">
      <FileUploader onNameChange={handleNameChange} onFilesChange={handleFilesChange} />
    </div>
  )
}

export default App
