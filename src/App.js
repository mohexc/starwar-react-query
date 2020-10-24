import React, { useState } from 'react'
import "./App.less"
import { ReactQueryDevtools } from 'react-query-devtools'
import Navbar from './components/Navbar'
import Planets from "./components/Planets"
import People from "./components/People"

// manin
const App = () => {
  const [page, setPage] = useState("Planets")

  return (
    <React.Fragment>

      <div className="app">
        <h1>Start Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "Planets" ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </React.Fragment>
  )
}

export default App
