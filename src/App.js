import './styles/App.scss';

import Header from './components/header';
import LargeLeft from './components/largeLeft';
import LargeRight from './components/largeRight';
import LocomotiveScroll from 'locomotive-scroll';
import MedLeft from './components/medLeft';
import MedRight from './components/medRight';
import Milestone from './components/milestone';
import Plyr from 'plyr';
import SiteSketch from './components/siteSketch';
import SmallLeft from './components/smallLeft';
import SmallMiddle from './components/smallMiddle';
import SmallRight from './components/smallRight';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true,
    //     repeat: true
    // });

    const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));

  }, [])

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="App" data-scroll-container>
      <Header />
      <div className="grid intro" data-scroll-section>
        <h1 data-scroll>The Artifact of Point Nepean</h1>
        <SiteSketch />
      </div>
      <div className="timeline">
        <Milestone year="2020" title="Point Nepean Quarantine Station"/>
        <SmallRight imgSrc='/assets/doom.gif' inset={true} trans={'-100px'}/>
        <LargeLeft imgSrc='/assets/site-plans.gif' trans={'-100px'}/>
        <p>PLACEHOLDER: Diagram</p>
        
        <Milestone year="2020 - Project 1" title="Reinstatement of Heritage Pier"/>
        <LargeRight imgSrc='/assets/pier.png' trans={'-100px'}/>
        <MedLeft imgSrc='/assets/pier_short.mp4' trans={'-260px'} video={true} />
        
        <Milestone year="2020 - Project 2" title="Artist-in-Residence Accomodation"/>
        <LargeLeft imgSrc='/assets/accom.png'/>
        <SmallLeft images={['/assets/demo.jpg']} inset={true} caption="Existing Officers' Accommodation" trans={'-140px'}/>
        <SmallMiddle imgSrc='/assets/liftcore.jpg' trans={'-150px'} caption="Proposed Alterations and Additions"/>
        <SmallLeft images={['/assets/demo.jpg', '/assets/demo.jpg','/assets/demo.jpg']} />

        <MedRight imgSrc="/assets/accom-plans.gif" trans={'-700px'} inset={true}/>
        <MedRight imgSrc="/assets/typ.jpg" trans={'-200px'} inset={true}/>
      </div>

      <div onClick={backToTop} className='back'>Back to Top</div>
    </div>
  );
}

export default App;
