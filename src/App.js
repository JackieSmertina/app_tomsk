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
import Grupp_psy from './pages/Grupp_psy';
import Directions from './pages/Directions';
import Seminars from './pages/Seminars';
import Intervision from './pages/Intervision';
import Tr from './pages/Tr';
import Join_association from './pages/Join_association';

function App() {
  return (
    <Router>
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
          <Route path="/benefits/grupp_psy" element={<Grupp_psy />} />
          <Route path="/benefits/directions" element={<Directions />}/>
          <Route path="/benefits/seminars" element={<Seminars />}/>
          <Route path="/benefits/intervision" element={<Intervision />}/>
          <Route path="/benefits/tr" element={<Tr />}/>
          <Route path="/join_association" element={<Join_association />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;