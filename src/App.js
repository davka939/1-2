import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Shop from './Components/Shop';
import Branch from './Components/Branch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='container'>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/branches" element={<Branch />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
