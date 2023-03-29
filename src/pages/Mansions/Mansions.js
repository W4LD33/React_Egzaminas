import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Filter from '../../components/Filters/Filter'
import FilteredMain from '../../components/FilteredMain/FilteredMain'
import Footer from '../../components/Footer/Footer'
import './mansions.css'

const Mansions = () => {
  return (
    <div className='home'>
      <Topbar />
      <Filter />
      <FilteredMain />
      <Footer />
    </div>
  )
}

export default Mansions
