import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { ProtectedRoute } from './components/ProtectedRoute'
import React, { Suspense } from 'react'

const Landing = React.lazy(() => import('./pages/Landing'))
const Login = React.lazy(() => import('./pages/Login'))
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Card = React.lazy(() => import('./components/Card'))
const SingUp = React.lazy(() => import('./pages/SingUp'))
const FilmDetails = React.lazy(() => import("./pages/FilmDetails"));

function App() {

    const { checkIfAuthenticated } = useAuth();

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/sing-up" element={<SingUp />}></Route>
                    <Route path="/sinopsis" element={<FilmDetails />}></Route>

                    <Route element={<ProtectedRoute isAllowed={checkIfAuthenticated} />}>
                        <Route path="/home" element={<Home />}></Route>
                    </Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/card" element={<Card />}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App