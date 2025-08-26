import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar/NavBar.jsx'
import SignUpForm from './components/SignUpForm/SignUpForm.jsx'
import SignInForm from './components/SignInForm/SignInForm.jsx'
import { UserContext } from './contexts/UserContext.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Landing from './components/Landing/Landing.jsx'

function App() {

  const { user } = useContext(UserContext)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={ user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm /> }  />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
    </>
  )
}

export default App
