import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import { Login } from './pages/Login';
import { Landing } from './pages/Landing';
import { Home } from './pages/Home';
import { SingUp } from './pages/SingUp';

export const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/sing-up' element={<SingUp />}></Route>
            </Routes>
        </BrowserRouter>
    );

}
