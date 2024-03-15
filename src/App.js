// ! Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// ! Styles
import './styles/App.css';

// ! Pages
import { Home } from './pages/Home.jsx';
import { Navbar } from './components/Nav.js';
import Footer from './components/Footer.js';
import { Coins } from './pages/Coins.jsx';

// ! components

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Coins' element={<Coins />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
