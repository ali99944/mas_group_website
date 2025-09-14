import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
        
    </>
  )
}

export default Layout