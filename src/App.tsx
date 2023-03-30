import React from "react"
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Account from './components/Account'
import Forecast from './components/Forecast'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <AuthContextProvider>
      <div>
        <h1 className="text-3xl font-bold text-center">Does It Go?</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/singin' element={<SignIn />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>} 
          />
          <Route path='/forecast' element={
            <ProtectedRoute>
              <Forecast />
            </ProtectedRoute>} 
          />
        </Routes>
      </div>
    </AuthContextProvider>
  )
}

export default App
