
import './App.css';
import AppHeader from './components/AppHeader';
import NavBar from './components/NavBar'
import Auth from './components/Auth';
import HomePage from './pages/HomePage';
//import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
      <AppHeader />
      <NavBar />
      <Auth />
     
      
    </div>
  );
}

export default App;
