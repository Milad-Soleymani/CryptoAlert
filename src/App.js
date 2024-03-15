// ! Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// ! Styles
import './styles/App.css';

// ! Pages
import { Home } from './pages/Home.jsx';
import { Navbar } from './components/Nav.js';
import Footer from './components/Footer.js';
import { Coins } from './pages/Coins.jsx';
import { Error404 } from './pages/404.jsx';

// ! components

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Coins' element={<Coins />} />
          <Route path='/asdf' element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
