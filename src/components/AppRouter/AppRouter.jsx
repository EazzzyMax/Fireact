import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dialogs from '../Dialogs/Dialogs';
import Profile from '../Profile/Profile';
import StartPage from '../StartPage/StartPage';
// import classes from './AppRouter.module.css'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/profile' element={<Profile />} />
      <Route path='/dialogs/*' element={<Dialogs />} />
      <Route path='/' element={<StartPage />} />
    </Routes>
  );
};

export default AppRouter;
