import React from 'react'
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Devops from './Devops'


function App() {
  return (
  
    
    <Router>
        <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route  path='/contact' element={<Contact />} />
        <Route  path='/services' element={<Services />} />
        <Route path='/services/devops' exact element={<Devops/>}/>
        </Routes>
        
    </Router>
  
  )
}

export default App