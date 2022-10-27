import { VarConstLet } from "./components/fundamentos/01-VarConstLet";
import { TemplateString } from "./components/fundamentos/02-TemplateString";

import './App.css'
// import { JsFunction } from "./components/fundamentos/05-JsFunction";
// import { ObjetosLiterales } from "./components/fundamentos/03-Object";
// import { JsArray } from "./components/fundamentos/04-Array";


import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { DesestObj } from "./components/fundamentos/06-DesestObj";
import { MiPrimerComp } from "./components/MiPrimerComp/MiPrimerComp";
import { DesestArray } from "./components/fundamentos/07-DesestArray";
import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer.js";
import { Feedback } from "./components/Feedback/Feedback.js";
import { Snacks } from "./components/Snacks/Snacks.js";
import { Beneficios } from "./components/Beneficios/Beneficios.js";
import { Contacto } from "./components/Contacto/Contacto.js";
import { Informacion } from "./components/Informacion/Informacion.js";
import { Preguntas } from "./components/Preguntas/Preguntas.js";
import {Route, Routes} from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { Nosotraspages } from "./components/pages/Nosotraspages";
import { Contactopages } from "./components/pages/Contactopages";
import { Productospages } from "./components/pages/Productospages";
import { Presentacion } from "./components/Presentacion/Presentacion.js";
import { Principal } from "./components/pages/Principal";



function App() {
  //  console.log(dataProducts)
  return (
    <>
      {/* <MiPrimerComp />*/} 
      {/*<VarConstLet />*/}
      {/*<TemplateString /> */} 
      {/*<ObjetosLiterales />*/}	
      {/*<JsArray /> */}
      {/* Aplicación de .map */}
      {/* <CardGrid data={productos}  /> */}
      {/*<JsFunction />*/}
      {/* <DesestObj /> */}
      {/* <DesestArray /> */}

      <NavBar/>
      
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
