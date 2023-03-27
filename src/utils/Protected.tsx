/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from 'react'
import jwt_decode from 'jwt-decode'
import { Navigate, useLocation } from 'react-router-dom'
import { getDataFromLocalStorage } from './functions'

interface ProtectedRouteProps {
  children: ReactNode
}

export default function Protected({ children }: ProtectedRouteProps) {
  const location = useLocation()
  const userToken = getDataFromLocalStorage('access_token')

  if (!userToken || userToken == null) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  const decoded: any = jwt_decode(userToken)

  if (location.pathname === '/student-details-form') return <> {children} </>

  if (!('allowed_for' in decoded)) {
    return <Navigate to="/student-details-form" />
  }

  return <> {children} </>
}
