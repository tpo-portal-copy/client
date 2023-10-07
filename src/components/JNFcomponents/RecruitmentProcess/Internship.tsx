import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { DevTool } from '@hookform/devtools'
import { Error } from '../../index'
import '../index.scss'
// import {R} from react;

const modeOfHiringData = [
  { id: 0, value: 'virtual', label: 'Virtual' },
  { id: 1, value: 'onsite', label: 'On-Site' },
  { id: 2, value: 'hybrid', label: 'Hybrid' },
]

// const Joboffer = [
//   { id: 0, value: 'Placement', label: 'Placement' },
//   { id: 1, value: 'Internship', label: 'Internship' },
//   { id: 2, value: 'Both', label: 'Both' },
// ]

type RecruitmentData = {
  companyName: string
  session: string
  isPlacement: boolean
  isIntern: boolean
  // isSixMonIntern: string
  JobDescription: string

  jobLocation: string
  tentativeDriveDate: Date | string
  Stipend: string
  Cuttoff: number
}

const defaultData: RecruitmentData = {
  companyName: '',
  session: '2024-25',
  isPlacement: false,
  isIntern: true,
  JobDescription: '',

  jobLocation: '',
  tentativeDriveDate: new Date(),
  Stipend: '',
  Cuttoff: 0.0,
}

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Company Name is Required'),
  session: Yup.string().required('Session is required'),
  isPlacement: Yup.boolean(),
  isIntern: Yup.boolean(),
  JobDescription: Yup.string().required('Job Description is required'),
  modeOfHiring: Yup.string().required('Mode of Hiring is required'),

  jobLocation: Yup.string().required('Job Location is required'),
  tentativeDriveDate: Yup.date()
    .required('Tentative Drive Date is required')
    .min(new Date(), 'Tentative Drive Date should be greater than today'),
  Stipend: Yup.string().required('Stipend is required'),
  Cuttoff: Yup.number()
    .required('Cuttoff is required')
    .min(0.0, 'Cuttoff should be greater than 0.0')
    .max(10.0, 'Cuttoff should be less than 10.0'),
})

function Placement() {
  const form = useForm<any>({
    defaultValues: defaultData,
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  })

  const { handleSubmit, formState, getFieldState, control } = form

  const isPlacement = form.watch('isPlacement')
  const modeOfHiringState = form.watch('modeOfHiring')
  // const isIntern = form.watch('isIntern')
  const { errors } = formState

  const onSubmit = (data: RecruitmentData) => {
    console.log(data)
  }

  return (
    <div className="root">
      <form onSubmit={handleSubmit((d) => onSubmit(d))} noValidate className="form-group">
        <div className="title">
          <h1> Internship Detail Form</h1>
        </div>

        <label className="label" htmlFor="companyName">
          Company Name
          <input
            type="text"
            className="form-control"
            id="companyName"
            {...form.register('companyName')}
          />
        </label>
        {errors.companyName && <Error errorMessage={errors.companyName.message as string} />}

        <label className="label" htmlFor="session">
          Session
          <input
            type="text"
            className="form-control"
            id="session"
            {...form.register('session', { disabled: true })}
          />
        </label>

        <label className="label" htmlFor="modeOfHiring">
          Mode of Hiring
          <select className="form-control" id="modeOfHiring" {...form.register('modeOfHiring')}>
            <option value="">Select Mode of Hiring</option>
            {modeOfHiringData.map((modeOfHiring) => (
              <option key={modeOfHiring.id} value={modeOfHiring.value}>
                {modeOfHiring.label}
              </option>
            ))}
          </select>
        </label>

        {/** */}

        <label className="label" htmlFor="Stipend">
          Stipend Offered
          <input type="text" className="form-control" id="Stipend" {...form.register('Stipend')} />
        </label>
        {errors.Stipend && <Error errorMessage={errors.Stipend.message as string} />}

        <label className="label" htmlFor="jobLocation">
          Job Location
          <input
            type="text"
            className="form-control"
            id="jobLocation"
            {...form.register('jobLocation')}
          />
        </label>
        {errors.jobLocation && <Error errorMessage={errors.jobLocation.message as string} />}

        <label className="label" htmlFor="tentativeDriveDate">
          Tentative Drive Date
          <input
            type="date"
            className="form-control"
            id="tentativeDriveDate"
            {...form.register('tentativeDriveDate', {
              valueAsDate: true,
            })}
          />
        </label>
        {errors.tentativeDriveDate && (
          <Error errorMessage={errors.tentativeDriveDate.message as string} />
        )}
      </form>

      <DevTool control={control} />
    </div>
  )
}

export default Placement
