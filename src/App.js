import React, { useState } from 'react'
import "./App.less"
import Navbar from './components/Navbar'
import Planets from "./components/Planets"
import People from "./components/People"

// manin
const App = () => {
  const [page, setPage] = useState("planets")
  return (
    <div className="app">
      <h1>Start Wars Info</h1>
      <Navbar />
      <div className="content">
        {page === "palnets" ? <Planets /> : <People />}
      </div>
    </div>
  )
}

export default App
