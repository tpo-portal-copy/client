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
