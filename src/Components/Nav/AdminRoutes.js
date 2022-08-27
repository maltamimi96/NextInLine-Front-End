import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../../Services/auth.service'
import { useGlobalState } from '../../utils/stateContext'


function AdminRoutes() { 


    const {store} = useGlobalState()
     const {admin} = store
    let r=false

    if (admin ==="false"){
         r=false
      }else if (admin==="true"){
         r=true
      }
      else{
      }


  return (
 
    r ? <Outlet/> : <Navigate to='/unauthorised'/>
  
  )
}

export default AdminRoutes