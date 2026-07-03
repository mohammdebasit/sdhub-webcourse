import React from 'react'
import Pnav from '../components/Pnav'
import { Outlet } from 'react-router'

const Lay2 = () => {
    return (
        <>
            <Pnav />
            <Outlet />
        </>
    )
}

export default Lay2