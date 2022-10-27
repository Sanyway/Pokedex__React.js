import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'


const ProtectedRoutes = () => {

const navigate = useNavigate()

const userName = useSelector(state => state.userName)



 if(userName){
  return <Outlet />
 }


useEffect(() => {
  if(!userName){
   return navigate('/')
  }
 }, [userName])
  
}

export default ProtectedRoutes