import React from 'react'
import Header from '../components/global/header'
import Footer from '../components/global/footer'
import GlobalNav from '../components/global/nav'

export default ({ children }) => (

  <div>
    <Header />
    <GlobalNav />
    <main className="bg-white pt-75px">
      {children}
    </main>
    <Footer />
  </div>
)
