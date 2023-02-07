// import { FormEventHandler, MouseEventHandler, ReactNode } from 'react'
import { FormikConfig, FormikFormProps, FormikHelpers, FormikValues } from 'formik'
import { FormEventHandler, MouseEventHandler, ReactNode } from 'react'

export type RouteProps = {
  id: number
  name: string
  url: string
}

export interface SidebarLayoutProps {
  children: ReactNode
}

export interface FieldInfoProps {
  label: string
  value: string | number
}

export type ButtonProps = {
  varient?: 'primary' | 'secondary'
  onclick?: MouseEventHandler<HTMLButtonElement>
  onsubmit?: FormEventHandler<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>
  children: ReactNode
  stretch?: boolean
  type?: 'button' | 'reset' | 'submit'
}

export interface ClusterCardProps {
  title: string
  range: string
  type: 'checkbox' | 'mark'
}

export interface ExperienceCardProps {
  id: number
  title: string
  description: string
  imgUrl: string
  jobType: string
  selStatus: string
  userName: string
  difficulty: string
  role: string
  postedOn: number
}

export interface InputProps {
  label?: string
  type: string | 'field' | 'list' | 'checkbox'
  options?: Array<OptionsType>
  id?: string
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
  year: number
  isMobile?: boolean
}

export interface ModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
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

export interface FormOneProps {
  onsubmit: FormikConfig<FormikValues>
}
