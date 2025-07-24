import React from 'react';
import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import Resources from '../components/Resources';
import BottomDescription from '../components/BottomDescription';
import JoinSection from '../components/JoinSection';

function Home() {
  return (
    <div>
      <Banner />
      <Benefits />
      <Resources />
      <BottomDescription />
      <JoinSection />
    </div>
  );
}

export default Home;