import React from 'react'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout({children, onNavigate, active}){
  return (
    <div className="app-container">
      <Header />
      <Navbar onNavigate={onNavigate} active={active} />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  )
}
