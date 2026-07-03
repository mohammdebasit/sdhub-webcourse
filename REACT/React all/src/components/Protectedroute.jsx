import React from 'react'
import { Navigate, Outlet } from 'react-router'

const Protectedroute = () => {
    const user=true;
    return user?<Outlet/>:<Navigate to={'login'}/>

}

export default Protectedroute