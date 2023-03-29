import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Privacy from './pages/Privacy/Privacy';
import Mansions from './pages/Mansions/Mansions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mansions" element={<Mansions />}/>
          <Route path="/privacy" element={<Privacy />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
