

import {Routes, Route, Navigate} from 'react-router-dom'


import Login from '../pages/Login';
import { LogoutPage } from '../pages/Logout';
import { CashierPage } from '../pages/Cashier';
import { DashboardPage } from '../pages/Dashboard';
import { LandingPage } from '../pages/Landing';

import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';



const MainRoutes = () => ( 
 
      <Routes>
        {/** Protected Routes */}
        {/** Wrap all Route under ProtectedRoutes element */}
        <Route index element={<LandingPage />} />
        <Route path="/" element={<ProtectedRoutes/>}>
          
            <Route path="/" element={<Navigate replace to="dashboard" />}/>
            <Route path="dashboard" element={<DashboardPage/>}/>
            <Route path="cashier" element={<CashierPage/>}/>
            <Route path="logout" element={<LogoutPage/>}/>
                              
             {/* <Route path="settings" element={<Settings/>}/>            
             <Route path="users" element={<Users extraItem="test extra item from router"/>}/>            
             <Route path="users/:userId" element={<SingleUser/>}/>           
             <Route path="users/new" element={<NewUser/>}/>   */}         
                      
         
        </Route>       
        
         {/** Public Routes */}
        {/** Wrap all Route under PublicRoutes element */}
        <Route path="login" element={<PublicRoutes/>}>
          <Route path="/login" element={<Login/>}/>

        </Route>
      </Routes>

     
    )
    
    export default MainRoutes