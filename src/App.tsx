import React from "react"
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Account from './pages/Account'
import Forecast from './pages/Forecast'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <AuthContextProvider>
      <div>
        <h1 className="text-3xl font-bold text-center">Does It Go?</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
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
