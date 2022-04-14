import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dialogs from '../components/Dialogs/Dialogs'
import Profile from '../components/Profile/Profile'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/dialogs" element={<Dialogs/>} />
    </Routes>
  )
}

export default AppRouter