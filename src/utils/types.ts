import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ChangeEvent, MouseEventHandler, ReactNode } from 'react'

export type RouteProps = {
  id: number
  name: string
  url: string
}

export interface SidebarLayoutProps {
  children: ReactNode
}

export type DropdownProps = {
  placeHolder: string
}

export interface FieldInfoProps {
  label: string
  value: string | number
}

export type ButtonProps = {
  onclick?: MouseEventHandler<HTMLButtonElement>
  onsubmit?: React.FormEventHandler<HTMLButtonElement> | undefined
  children: ReactNode
  stretch?: boolean
  type?: 'button' | 'reset' | 'submit'
}

export interface ClusterCardProps {
  title: string
  range: string
}

export interface ResourcesCardProps {
  id: number
  label: string
  imgUrl: string
}

export interface ExperienceCardProps {
  id: number
  title: string
  description: string
  imgUrl?: string
  jobType: string
  selStatus: string
  userName: string
  difficulty: string
  role: string
  postedOn: number
}

export type InputProps = {
  name: string
  placeholder: string
  value: string | number
  onChange: (e: ChangeEvent<any>) => void
  onBlur: (e: ChangeEvent<any>) => void
  type?: 'text' | 'password' | 'date' | 'file'
}

export interface SelectProps {
  name: string
  placeholder: string
  value: string | number
  onChange: (e: ChangeEvent<any>) => void
  onBlur: (e: ChangeEvent<any>) => void
  children: any
}

type OptionsType = {
  id: number
  value: string
}

export interface ClusterListProps {
  clusterName: string
  clusterRange: string
}
export interface CheckListItemProps {
  label: string | number
  isMobile?: boolean
}

export interface ModalProps {
  isOpen: boolean
  title: string
  onCloseHandler: () => void
}

export interface ExperiencesSidebarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ExperienceFilterProps {
  isMobile?: boolean
}

export interface CompanyListProps {
  id: number
  name: string
}

export interface RoleListProps {
  id: number
  name: string
}

export interface Post {
  id: number
  title: string
  description: string
  imageUrl: string
  postedOn: string
}

export interface Drive {
  companyName: string
  id: number
  date: string
  link: string
}

export interface PastExperienceSummary {
  studentName: string
  id: number
  date: string
  link: string
}

export interface DrivesCardProps {
  id: number
  companyName: string
  imgUrl: string
  ctcOffered: number
  startingDate: Date
  modeOfHiring: string
  aptitudeTest: string
  ppt: string
  jobLocation: string
  type: string
  eligibleBatches: Array<string>
  jobProfile: string
  cluster: number
}

export interface ClusterType {
  id: number
  label: string
}

export interface SidebarProps {
  onLinkClickHandler: () => void
}

export interface FaqProps {
  id: number
  title: string
  description: string
}

export type FormOneData = {
  firstName: string
  middleName: string
  lastName: string
  dob: string
  state: string
  city: string
  pincode: number
  personalEmail: string
  gender: string
  category: string
  phone: number
  linkedin: string
  isPwd: boolean
  disabilityTypes: string
}

export interface FormTwoData {
  tenthYear: number
  tenthSchool: string
  tenthBoard: string
  tenthPercentage: number
  twelfthYear: number
  twelfthSchool: string
  twelfthBoard: string
  twelfthPercentage: number
  jeeRank: number
}

export interface FormThreeData {
  course: string
  branch: string
  cgpi: number
  activeBacklog: number
  totalBacklog: number
  gateScore: number
  catScore: number
  batchYear: number
  passingYear: number
  currentYear: number
  gapYear12: number
  gapYearUG: number
}

export interface FormOneProps {
  onNext: (values: FormOneData) => void
  data: FormOneData
}

export interface FormTwoProps {
  onNext: (values: FormTwoData) => void
  onBack: (values: FormTwoData) => void
  data: FormTwoData
}

export interface FormThreeProps {
  onNext: (values: FormThreeData) => void
  onBack: (values: FormThreeData) => void
  data: FormThreeData
}

export interface FormFourProps {
  onSubmit: () => void
}

export interface ProgressBarProps {
  completed: number
  step: number
}

export interface HeaderLayoutProps {
  children: ReactNode
}

export interface StatsCardProps {
  icon: IconProp
  bgColor: string
  value: number
  label: string
  color: string
  iconColor: string
}

export interface StatsNumberProps {
  n: number
}

type DataType = {
  id: string
  label: string
  value: number
  color: string
}

export interface PieChartProps {
  data: Array<DataType>
}

export interface PaginatorProps {
  curr: number
  max: number
  onNext: MouseEventHandler<HTMLButtonElement>
  onPrev: MouseEventHandler<HTMLButtonElement>
}

export interface StatisticsDetailsProps {
  id: number
  company: string
  totalOffers: number
  courses: Array<StatisticsDetailsCourseProps>
}

export interface StatisticsDetailsCourseProps {
  id: number
  courseName: string
  totalCourseOffers?: number
  roles: Array<StatisticsDetailsRoleProps>
  branches: Array<StatisticsDetailsCourseBranchesProps>
}

export interface StatisticsDetailsRoleProps {
  id: number
  roleName: string
  ctcOffered: number
  totalroleoffers: number
  branches: Array<StatisticsDetailsBranchProps>
}

export interface StatisticsDetailsBranchProps {
  id: number
  branchName: string
  offers: number
}

export interface StatisticsDetailsCourseBranchesProps {
  id: number
  branchName?: string
  Offers: any
  offersBranchWise: number
}
export interface ErrorProps {
  errorMessage: string
}
