
import {Navigate, Outlet} from 'react-router-dom'
import { AppLayout } from '../layouts/Application'






const  ProtectedRoutes=() =>{

  const auth = !!localStorage.getItem('user') 
  console.log('auth', auth, !!localStorage.getItem('user') )
  

  return auth? <AppLayout><Outlet/></AppLayout>: <Navigate to="/login"/>
}

export default ProtectedRoutes;