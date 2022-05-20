import { BrowserRouter, Routes, Route  } from 'react-router-dom'

import { Home } from './Pages/Home/index.js'
import { Login } from './Pages/Login/index.js'

import {AuthProvider} from './Context.js';

export default function Router() {  

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}