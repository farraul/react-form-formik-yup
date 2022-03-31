import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home';
import Contact_formik from './Containers/Contact_formik/Contact_formik';
import Contact_yup from './Containers/Contact_yup/Contact_yup';


import Header from './Components/Header/Header';
import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto-formik" element={<Contact_formik/>} />
          <Route path="/contacto-yup" element={<Contact_yup/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
