import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';

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
