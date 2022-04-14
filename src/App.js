import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter/AppRouter';
// import Main from './components/Main/Main';

function App() {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header />
        <main>
          <Navigation />
          <AppRouter />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
