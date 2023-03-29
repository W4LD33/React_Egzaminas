import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Filter from '../../components/Filters/Filter'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Topbar />
      <Filter />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
