import React from 'react'
import Home from '../pages'
import Navbar from './Navbar'
const Layout = ( {children}) => {
  return (
    <div>

        <Navbar/>
        {children}
        {/* <Home/> */}
    </div>
  )
}

export default Layout