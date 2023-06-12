import React from 'react';
import {useNavigate } from 'react-router-dom';

export const  LogoutPage=() =>{

  const navigate=useNavigate()

  const logout=()=>{
    localStorage.removeItem('user')
    navigate('/')
  }

  return <div className='w-screen h-screen text-3xl'>
      <h2>Clicca per uscire con sicurezza dal sistema </h2>
      
      <button onClick={logout}> CLICCA PER USCIRE</button>
  </div>;
}

