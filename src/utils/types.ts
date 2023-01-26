import { MouseEventHandler, ReactNode } from 'react'

export type RouteProps = {
  id: number
  name: string
  url: string
}

export interface FieldInfoProps {
  label: string
  value: string | number
}

export type ButtonProps = {
  varient: 'primary' | 'secondary'
  onclick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export interface ClusterCardProps {
  title: string
  range: string
}

export interface BasicCardProps {
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

export type FormFieldProps = {
  label: string
  role: 'field' | 'list'
  data: Array<ObjectType>
}

type ObjectType = {
  id: number
  value: string
}

export interface ClusterListProps {
  clusterName: string
  clusterRange: string
}
