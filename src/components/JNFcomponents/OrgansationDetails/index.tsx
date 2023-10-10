import React, { useEffect } from 'react'
import '../index.scss'
import { set, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Error } from '../../index'
import { OfferedDrive } from '../../../utils/types'

const offeredDriveData = [
  { id: 0, value: 'Placement', label: 'Placement' },
  { id: 1, value: 'Internship', label: 'Internship' },
  { id: 2, value: 'Both', label: 'Both' },
]

type OrganizationData = {
  companyName: string
  offeredDrive: string
}

const defaultData: OrganizationData = {
  companyName: '',
  offeredDrive: '',
}

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Company Name is Required'),
  offeredDrive: Yup.string().required('Job Type is Required'),
})

function App({ setOfferedDrive, parentState, setParentState }) {
  const form = useForm<any>({
    defaultValues: defaultData,
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  })
  const { handleSubmit, formState, watch } = form
  const { errors } = formState

  /// ////
  const [JobType, setJobType] = React.useState('')
  const handleType = (e: any) => {
    setJobType(e.target.value)
  }
  useEffect(() => {
    // Update the document title using the browser API
    if (JobType) {
      // console.log('JobType:', JobType)
      if (JobType === 'Placement') {
        setParentState({ ...parentState, isPlacement: true, isIntern: false })
      } else if (JobType === 'Internship') {
        setParentState({ ...parentState, isPlacement: false, isIntern: true })
      } else {
        setParentState({ ...parentState, isPlacement: true, isIntern: true })
      }
    }
  })

  return (
    <div className="root">
      <form noValidate className="form-group">
        <div className="title">
          <h1> Organization details </h1>
        </div>

        <label className="label" htmlFor="companyName">
          Company Name
          <input
            type="text"
            className="form-control"
            id="companyName"
            onChange={(e) => setParentState({ ...parentState, companyName: e.target.value })}
          />
        </label>
        {/*  {errors.companyName && <Error errorMessage={errors.companyName.message as string} />} */}

        <label className="label" htmlFor="offeredDrive">
          Job Type
          <select className="form-control" id="offeredDrive" onChange={handleType}>
            <option value="">Select Job Type</option>
            {offeredDriveData.map((offeredDrive) => (
              <option key={offeredDrive.id} value={offeredDrive.value}>
                {offeredDrive.label}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  )
}

export default App
