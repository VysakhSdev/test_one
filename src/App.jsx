import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from "react-router-dom";
import Children from './Routes/RootLayout';


function App() {

  return (
    <>
    <Routes>

      <Route path="/" element={<Children /> }>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
