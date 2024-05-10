import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to='/login' />
  }
  return <Outlet />
}
export default ProtectedRoutes


//o
// if (token) {
//   return <Outlet />;
// } else {
//   return <Navigate to='/login' />;
// }