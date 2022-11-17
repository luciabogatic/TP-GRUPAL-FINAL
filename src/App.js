import './App.css'
import { NavBar } from "./components/NavBarPP/NavBar";
import { NavBarMobile } from "./components/NavBarMobile/NavBarMobile";
import { Footer } from "./components/Footer/Footer.js";
import {Route, Routes} from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { Nosotraspages } from "./components/pages/Nosotraspages";
import { Contactopages } from "./components/pages/Contactopages";
import { Productospages } from "./components/pages/Productospages";
import { Principal } from "./components/pages/Principal";
import { CartProvider } from "./components/context/CardContext";



function App() {

  return (
    <>
      <CartProvider/>
      <NavBar/>
      <NavBarMobile/>
      
      <Routes>
      <Route path="/" element={<Principal/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/nosotras" element={<Nosotraspages/>} />
      <Route path="/contacto" element={<Contactopages/>} />
      <Route path="/productos" element={<Productospages/>} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
