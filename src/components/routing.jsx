import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Nav from "./Nav"

const routing = () => {
  return (
    <div>
          <Routes>
        <Route path='/' element={<Nav />} />
    </Routes>
    </div>
  )
}

export default routing
