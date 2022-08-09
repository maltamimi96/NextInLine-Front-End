import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../../Services/auth.service'
import { useGlobalState } from '../../utils/stateContext'


function PrivateRoutes() {
    const {store} = useGlobalState()
    const {loggedInUser} = store
  return (
    loggedInUser ? <Outlet/> : <Navigate to='/login'/>

    
  )
}

export default PrivateRoutes