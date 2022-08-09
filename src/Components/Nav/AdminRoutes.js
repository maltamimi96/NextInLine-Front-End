import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../../Services/auth.service'
import { useGlobalState } from '../../utils/stateContext'


function AdminRoutes() { 


    const {store} = useGlobalState()
    const {admin} = store


  return (
 
    admin ? <Outlet/> : <Navigate to='/login'/>
  
  )
}

export default AdminRoutes