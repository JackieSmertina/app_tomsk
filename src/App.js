import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/GlobalStyles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Clients from './pages/Clients';
import FindPsychologist from './pages/FindPsychologist';
import FindAccreditedCenters from './pages/FindAccreditedCenters';
import Colleagues from './pages/Colleagues';
import GruppPsy from './pages/GruppPsy';
import Directions from './pages/Directions';
import Seminars from './pages/Seminars';
import Intervision from './pages/Intervision';
import Tr from './pages/Tr';
import JoinAssociation from './pages/JoinAssociation';

const basename = process.env.NODE_ENV === 'production' ? '/app_tomsk/' : '/';

function App() {
  return (
    <Router basename={basename}>  {/* Добавлен basename здесь */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/resources" element={<Colleagues/>} />
          <Route path="/membership-directory" element={<Clients />} />
          <Route path="/find-psychologist" element={<FindPsychologist />} />
          <Route path="/find-accredited-centers" element={<FindAccreditedCenters />} />
          <Route path="/benefits/grupp_psy" element={<GruppPsy />} />
          <Route path="/benefits/directions" element={<Directions />}/>
          <Route path="/benefits/seminars" element={<Seminars />}/>
          <Route path="/benefits/intervision" element={<Intervision />}/>
          <Route path="/benefits/tr" element={<Tr />}/>
          <Route path="/join_association" element={<JoinAssociation />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;