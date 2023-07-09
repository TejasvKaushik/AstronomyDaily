import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route Component={Home} path="/" exact />
          <Route Component={NasaPhoto} path="/nasaphoto" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
