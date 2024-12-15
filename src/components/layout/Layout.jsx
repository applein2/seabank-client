import React from 'react'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
      </>
  )
}

export default Layout