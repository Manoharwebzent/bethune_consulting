import React from 'react'
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Devops from './Devops'
import ApplicationDev from './ApplicationDev'
import DataScience from './DataScience'
import DigitalTransformation from './DigitalTransformation'
import TechTraining from './TechTraining'

function App() {
  return (
  
    
    <Router>
        <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route  path='/contact' element={<Contact />} />
        <Route  path='/services' element={<Services />} />
        <Route path='/devops' exact element={<Devops/>}/>
        <Route path='/application-development' exact element={<ApplicationDev/>}/>
        <Route path='/data-science' exact element={<DataScience/>}/>
        <Route path='/digital-transformation' exact element={<DigitalTransformation/>}/>
        <Route path='/technology-training' exact element={<TechTraining/>}/>
        
        </Routes>
        
    </Router>
  
  )
}

export default App