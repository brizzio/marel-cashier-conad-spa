
import {Navigate, Outlet} from 'react-router-dom'
import { AppLayout } from '../layouts/Application'
import App from '../App'

const useAuth=()=>{
  const user=localStorage.getItem('user')
  if(user){
    return true
  } else {
    return false
  }
}

const  ProtectedRoutes=() =>{

  const auth=useAuth()

  return auth? <AppLayout><Outlet/></AppLayout>: <Navigate to="/login"/>
}

export default ProtectedRoutes;