import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

type ProtectedRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/signin' />
  }
  return children
}

export default ProtectedRoute