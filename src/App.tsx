import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home';
import Contact from './Containers/Contact/Contact';

import Header from './Components/Header/Header';
import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
