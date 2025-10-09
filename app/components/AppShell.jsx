"use client"

import Header from '../components/Header'
import Footer from '../components/Footer'
import CounterInitializer from '../components/CounterInitializer'

export default function AppShell ({ children }) {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <div className='flex-grow-1'>{children}</div>
      <Footer />
      <CounterInitializer />
    </div>
  )
}


