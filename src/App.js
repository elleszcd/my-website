import React from 'react'
import Home from './Home'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Home />
      </Routes>
    </Router>
  )
}

export default App
