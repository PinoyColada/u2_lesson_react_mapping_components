import React from 'react'
import './App.css'
import LeftSidebar from './components/LeftSidebar'
import RightSideBar from './components/RightSidebar'
import CountryItem from './components/CountryItem'
import countries from './countries'

console.log(countries);

const App = () => {

  return (
  <div className="flex-row">
    <LeftSidebar />
    <RightSideBar countries = {countries}></RightSideBar>
    </div>
  )
}

export default App
