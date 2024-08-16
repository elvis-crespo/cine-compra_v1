import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Card } from './components/Card'
import { SingUp } from './pages/SingUp'
import { About } from './pages/About'
import { useAuth } from './hooks/useAuth'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {

  const { checkIfAuthenticated } = useAuth();
  console.log('True o false', checkIfAuthenticated())

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sing-up' element={<SingUp />}></Route>

        <Route element={<ProtectedRoute isAllowed={checkIfAuthenticated} />}>
          <Route path='/home' element={<Home />}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/card' element={<Card />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
