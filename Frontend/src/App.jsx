import React from 'react'
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard'
import StudentSignup from './pages/auth/StudentSignup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CompanySignup from './pages/auth/CompanySignup'
import StudentLogin from './pages/auth/StudentLogin'
import CompanyLogin from './pages/auth/CompanyLogin'
import { Toaster } from 'react-hot-toast';
import CompanyDashboard from './pages/CompanyDashboard'

const App = () => {
  return (
    <>

      <Toaster position="top-center"  containerStyle={{left: 350}}/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/auth/student-signup' element={<StudentSignup/>}/>
          <Route path='/auth/company-signup' element={<CompanySignup/>}/>
          <Route path='/auth/student-login' element={<StudentLogin/>}/>
          <Route path='/auth/company-login' element={<CompanyLogin/>}/>
          <Route path='/dashboard' element={<StudentDashboard/>}/>
          <Route path='/company/dashboard' element={<CompanyDashboard/>}/>
        </Routes>

    
    </>
  )
}

export default App