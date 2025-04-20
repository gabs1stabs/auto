import Navbar from './components/navbar';
import PressHere from './components/presshere';
import { Navigate, Route, Routes } from 'react-router-dom';
import Acceuil from './components/acceuil'
import Apropos from './components/apropos'
import Services from './components/services'
import Nosprojets from './components/nosprojets'
import Gallery from './components/gallery'
import Contact from './components/contact'

function Mainpage() {
  return (
      <>
          <Navbar />
          <Routes>
          <Route path="/" element={<Navigate to="/Acceuil" replace />} />
            <Route path="/Acceuil" element={<Acceuil /> }></Route>
            <Route path="/Apropos" element={<Apropos />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Nosprojets" element={<Nosprojets />}></Route>
            <Route path="/Gallery" element={<Gallery />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
      </>
  );
}
function App() {
  return (
          <Routes>
              <Route path="/" element={<PressHere />} />
              <Route path="/*" element={<Mainpage />} />
          </Routes>
  );
}

export default App;
