
import './App.css';
import AppHeader from './components/AppHeader';
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <AppHeader />
      <NavBar />
     
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
