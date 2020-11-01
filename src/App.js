import './styles/App.scss';

import Header from './components/header';
import LargeLeft from './components/largeLeft';
// import LocomotiveScroll from 'locomotive-scroll';
import MedLeft from './components/medLeft';
import Milestone from './components/milestone';
import SiteSketch from './components/siteSketch';
import SmallLeft from './components/smallLeft';
import SmallRight from './components/smallRight';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true,
    //     repeat: true
    // });

  }, [])


  return (
    <div className="App" data-scroll-container>
      <div className="timeline"></div>
      <Header />
      <div className="grid intro" data-scroll-section>
        <h1 data-scroll data-scroll-position="top" data-scroll-speed="3">The Artifact of Point Nepean</h1>
        <SiteSketch />
      </div>
      <Milestone year="2020" title="Point Nepean Quarantine Station"/>
      <SmallRight imgSrc='/assets/existing.jpg' inset={true}/>
      <LargeLeft imgSrc='/assets/exist-01.png' caption="Exisiting Site Plan" trans={-100}/>
      <SmallLeft imgSrc='/assets/existing.jpg' />
      <MedLeft imgSrc='/assets/existing.jpg'/>
    </div>
  );
}

export default App;
