import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
import { useState } from 'react'

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