import React from 'react'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className='home'>
          <h1>Seja Bem Vindo!</h1>
      </div>
      <Footer/>
    </div>
  )
}
