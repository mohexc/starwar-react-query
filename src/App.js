import React, { useState } from 'react'
import "./App.less"
import { ReactQueryDevtools } from 'react-query-devtools'
import Navbar from './components/Navbar'
import Planets from "./components/Planets"
import People from "./components/People"
import { Col, Row } from 'antd'

// manin
const App = () => {
  const [page, setPage] = useState("Planets")

  return (
    <React.Fragment>

      <Row justify="center">
        <Col xs={23} md={23} lg={16} >
          <h1>Start Wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === "Planets" ? <Planets /> : <People />}
          </div>

        </Col>
      </Row>

      <ReactQueryDevtools initialIsOpen={false} />
    </React.Fragment>
  )
}

export default App
