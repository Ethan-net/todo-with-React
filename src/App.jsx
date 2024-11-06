import React from 'react'
import Todo from './components/Todo'
import{BrowserRouter as Router, Routes, Link, Route} from "react-router-dom"
import Nav from './components/nav'

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route 
        path='/'
        element={<Nav/>}
        />
        <Route
        path='/todo'
        element={<Todo/>}/> 
      </Routes>
    </Router>
    </>
    
    // <div>
    //   <Todo/>
    // </div>
  )
}
