import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {

  console.log("Auth rendring.....")

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default AuthLayout
