import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Pages/forms/Login'
import Signup from './components/Pages/forms/SignUp'

import { UserContext } from './App'

function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <>
      <Routes>
        {userContext.email && (
          <Route path='/' element={<>Welcome {userContext.email}</>} />
        )}
        {!userContext.email && (
          <>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </>
        )}
      </Routes>
    </>
  )
}

export default RoutesComp