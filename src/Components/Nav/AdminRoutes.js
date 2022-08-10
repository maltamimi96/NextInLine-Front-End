import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../../Services/auth.service'
import { useGlobalState } from '../../utils/stateContext'


function AdminRoutes() { 


    const {store} = useGlobalState()
     const {admin} = store
    let r=false

    console.log(store.admin,"from admin")
    if (admin ==="false"){
         r=false
      }else if (admin==="true"){
         r=true
      }
      else{
        console.log(r)
      }
      console.log(admin)


  return (
 
    r ? <Outlet/> : <Navigate to='/unauthorised'/>
  
  )
}

export default AdminRoutes