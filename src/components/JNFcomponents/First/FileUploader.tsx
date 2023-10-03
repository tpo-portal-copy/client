import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { nanoid } from 'nanoid'
import './FileUploader.scss'

interface FileUploaderProps {
  onNameChange: (name: string) => void
  onFilesChange: (files: File[]) => void
}

function FileUploader({
  onNameChange,
  onFilesChange,
}: {
  onNameChange: (name: string) => void
  onFilesChange: (files: File[]) => void
}) {
  const [organizationName, setOrganizationName] = useState<string>('')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFiles((prev) => [...prev, ...acceptedFiles])
    onFilesChange(selectedFiles)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganizationName(event.target.value)
    onNameChange(event.target.value)
  }
  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const Files: File[] = []
    const fileList = event.target.files
    if (!fileList) return

    for (let i = 0; i < fileList.length; i += 1) {
      Files.push(fileList[i])
    }

    setSelectedFiles((prev) => [...prev, ...Files])
    onFilesChange(selectedFiles)
    // onFilesChange(event.target.files as File[]);
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
            value={organizationName}
            onChange={handleNameChange}
            required
          />
        </label>
      </div>
    </div>
  )
}

export default FileUploader
