import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testinonials from '../components/Testinonials'
import GenerateButton from '../components/GenerateButton'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testinonials/>
      <GenerateButton/>
     
    </div>
  )
}

export default Home