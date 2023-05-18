import React from 'react'
import Assignment from './Assignment'
import Body from './Body'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div> 
     <BrowserRouter>
     <Assignment></Assignment>
     <Routes>
      <Route path='' element={<Body/>}></Route>
      </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App