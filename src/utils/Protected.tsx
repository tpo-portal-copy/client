/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from 'react'
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

  const eligibility = getDataFromLocalStorage('eligible')

  if (location.pathname === '/student-details-form') return <> {children} </>

  if (eligibility === '') {
    return <Navigate to="/student-details-form" />
  }

  return <> {children} </>
}
