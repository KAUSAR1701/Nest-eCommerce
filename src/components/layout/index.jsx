import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout 
