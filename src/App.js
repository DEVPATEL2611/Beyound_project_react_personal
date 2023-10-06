
import './App.css';
import AppHeader from './components/AppHeader';
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <AppHeader />
  
        <NavBar />
        <HomePage />
      
    </div>
  );
}

export default App;
