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
  id?: number
  label: string
  imgUrl: string
}

export type NameObject = {
  name: string
  logo: string
}

export interface ExperienceCardProps {
  id: number
  company: string
  description_read: string
  imgUrl?: string
  jobtype: string
  selected: boolean
  name?: NameObject
  difficulty: string
  roles: string
  created_at: string
  anonymity: boolean
}

export type InputProps = {
  name: string
  placeholder: string
  value: string | number | undefined
  onChange: (e: ChangeEvent<any>) => void
  onBlur: (e: ChangeEvent<any>) => void
  type?: 'text' | 'password' | 'date' | 'file' | 'number'
  isDisabled?: boolean
}

export interface SelectProps {
  name?: string
  placeholder?: string
  value?: string | number | undefined
  onChange?: (e: ChangeEvent<any>) => void
  onBlur?: (e: ChangeEvent<any>) => void
  children?: any
}

export interface ClusterListProps {
  clusterName: string
  clusterRange: string
}
export interface CheckListItemProps {
  label: string | number
  isMobile?: boolean
  isChecked?: boolean
  onClick: (company: string) => void
}

export interface ModalProps {
  isOpen: boolean
  title: string
  list: Array<any>
  selectedItems: Array<string>
  onItemClick: (company: string) => void
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
  postedOn: string | undefined
  onClick: () => void
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

interface EligibleBatchesObj {
  branch_name: string
  course: string
  id: number
}
export interface DrivesCardProps {
  id: number
  companyName: string
  imgUrl: string
  ctcOffered: number
  startingDate: string
  modeOfHiring: string
  isAptitudeTest: boolean
  isPpt: boolean
  jobLocation: string
  type: string
  eligibleBatches: Array<EligibleBatchesObj>
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
  first_name: string
  middle_name: string
  last_name: string
  dob: string
  state: string
  city_write: string
  pincode: number | undefined
  personal_email: string
  gender: string
  category: string
  pnumber: string
  linkedin: string
  pwd: boolean
  disability_type: string
  disability_percentage: number | undefined
}

export interface FormTwoData {
  class_10_year: number | undefined
  class_10_school: string
  class_10_board: string
  class_10_perc: number | undefined
  class_12_year: number | undefined
  class_12_school: string
  class_12_board: string
  class_12_perc: number | undefined
  jee_mains_rank: number | undefined
  class_12_domicile: string
}

export interface FormThreeData {
  course: string
  branch_write: string
  cgpi: number | undefined
  active_backlog: number | undefined
  total_backlog: number | undefined
  gate_score: number | undefined
  cat_score: number | undefined
  batch_year: number | undefined
  passing_year: number | undefined
  current_year: string
  gap_12_ug: number | undefined
  gap_ug_pg: number | undefined
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
  onSubmit: (values: any) => void
  course: string
  year: number | string | undefined
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
  max_stipend?: any
  min_stipend?: any
  avg_stipend?: any
  offers: any
  max_ctc?: any
  min_ctc?: any
  avg_ctc?: any
}

export interface PieChartProps {
  data: Array<DataType>
}

export interface PaginatorProps {
  curr: number
  max: number
  onNext: MouseEventHandler<HTMLButtonElement>
  onPrev: MouseEventHandler<HTMLButtonElement>
  disablePrev?: boolean
  disableNext?: boolean
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
  branches: Array<StatisticsDetailsBranchesProps>
}

export interface StatisticsDetailsRoleProps {
  id: number
  roleName: string
  ctcOffered: number
  totalroleoffers: number
}

export interface StatisticsDetailsBranchesProps {
  id: number
  branchName?: string
  offersRoleWise: Array<StatisticsDetailsOffersRoleWiseProps>
  offersBranchWise: number
}

export interface StatisticsDetailsOffersRoleWiseProps {
  id: number
  noOfOffers: number
}

export interface ErrorProps {
  errorMessage: string
}

export interface TopCompanies {
  logo?: string
  name: string
  max_stipend: string
  max_ctc: string
  offers?: string
}

export interface StatsInfo {
  id: string | number
  value: number
  label: string
}

export interface Company {
  id: number | string
  name: string
}

export interface BasicStats {
  course: string
  offers: number
  branch: string
}

export interface TimeStamps {
  years: number
  months: number
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface ClusterDetailProps {
  cluster_id: number
  range: string
}
export interface ClusterProps {
  cluster_1_r: ClusterDetailProps
  cluster_2_r: ClusterDetailProps
  cluster_3_r: ClusterDetailProps
}
export interface PlacementDataProps {
  id: number
  student: string
  cluster: ClusterProps
  resume: string
  undertaking: boolean
}
export interface MultiSelectDropDownData {
  value: string
  label: string
}

export interface ClusterChosen {
  id: string | number
  value: string | number
}
export interface MultiSelectDropDownProps {
  placeholder: string
  clusterData: Array<MultiSelectDropDownData>
  choosenClusters: Array<ClusterChosen>
  onClick: (e: any) => void
  onDelete: (e: any) => void
}

export interface CompaniesTableProps {
  session: string
  type: string
  company: string
}

export interface ModelProps {
  title: string
  description: string
}

export interface JNFFormOneData {
  companyName: string
  session: string
  isPlacement: string
  isIntern: string
  modeOfHiring: string
  prePlacementTalk: string
  aptitudeTest: string
  technicalTest: string
  groupDiscussion: string
  personalInterview: string
  noOfPersonVisiting: undefined
  jobLocation: string
  tentativeDriveDate: string
}

export interface JNFFormOneProps {
  onNext: (values: JNFFormOneData) => void
  data: JNFFormOneData
}

export interface RadioSelectProps {
  name: string
  placeholder: string
  onChange: (e: any) => void
  onBlur: (e: ChangeEvent<any>) => void
  value: string
}

export interface JNFFormTwoData {
  tentativeStartDate: string
  jobProfile: string
  ctc: undefined
  jobDescription: string
  cgpi: undefined
  eligibleBatches: string
  course: string
  branch: string
}

export interface JNFFormTwoProps {
  onNext: (values: JNFFormTwoData) => void
  onBack: (values: JNFFormTwoData) => void
  data: JNFFormTwoData
}

export interface JNFFormThreeData {
  isPPO: boolean
  tentativeStartDate: string
  jobProfile: string
  stipend: undefined
  duration: undefined
  ctc: undefined
  jobDescription: string
  cgpi: undefined
  eligibleBatches: string
  course: string
  branch: string
}

export interface JNFFormThreeProps {
  onNext: (values: JNFFormThreeData) => void
  onBack: (values: JNFFormThreeData) => void
  data: JNFFormThreeData
}

export interface JNFFormFourData {
  type: undefined
  name: undefined
  mobileNumber: undefined
  email: undefined
}

export interface JNFFormFourProps {
  onSubmit: (values: JNFFormFourData) => void
  onBack: (values: JNFFormFourData) => void
  data: JNFFormFourData
}

export interface HRListProps {
  hr_type: undefined
  hr_name: undefined
  hr_mobile_number: undefined
  hr_email: undefined
}
