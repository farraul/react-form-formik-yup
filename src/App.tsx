import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home';
import ContactFormik from './Containers/ContactFormik/ContactFormik';
import ContactYup from './Containers/ContactYup/ContactYup';
import ContactComponents from './Containers/ContactComponents/ContactComponents';


import Header from './Components/Header/Header';
import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto-formik" element={<ContactFormik/>} />
          <Route path="/contacto-yup" element={<ContactYup/>} />
          <Route path="/contacto-components" element={<ContactComponents/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
