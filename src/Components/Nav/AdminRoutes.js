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
        sessionStorage.setItem("admin",admin)
        console.log(r)
        console.log(sessionStorage.getItem("admin") )
      }else if (admin==="true"){
         r=true
        console.log(r)
      }
      else{
        console.log(r)
      }
    


  return (
 
    r ? <Outlet/> : <Navigate to='/unauthorised'/>
  
  )
}

export default AdminRoutes