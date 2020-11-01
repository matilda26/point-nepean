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
import TwoCol from './components/twoCol';
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
        <SmallRight images={['/assets/doom.gif']} inset={true} trans={'-100px'}/>
        <LargeLeft imgSrc='/assets/site-plans.gif' trans={'-100px'}/>
        <p>PLACEHOLDER: Diagram</p>
        
        <Milestone year="2020 - Project 1" title="Reinstatement of Heritage Pier"/>
        <LargeRight imgSrc='/assets/pier.png' trans={'-100px'}/>
        <SmallLeft images={["/assets/drawing.jpg"]} trans='-40%' inset={true}/>
        <MedLeft imgSrc='/assets/pier_short.mp4' video={true} />
        
        <Milestone year="2020 - Project 2" title="Artist-in-Residence Accomodation"/>
        <LargeLeft imgSrc='/assets/accom.png'/>
        <SmallLeft images={['/assets/demo.jpg']} inset={true} caption="Existing Officers' Accommodation" trans={'-140px'}/>
        <SmallMiddle imgSrc='/assets/liftcore.jpg' trans={'-150px'} caption="Proposed Alterations and Additions"/>
        <SmallLeft images={['/assets/art-01.jpg', '/assets/art-02.jpg','/assets/art-03.jpg','/assets/art-04.jpg']} />
        <MedRight imgSrc="/assets/accom-plans.gif" trans={'-1000px'} inset={true}/>
        <MedRight imgSrc="/assets/typ.jpg" trans={'-200px'} inset={true}/>
        <TwoCol imgsOne={['/assets/closed.jpg']} imgsTwo={['/assets/open.jpg']} trans='100px'/>

        <Milestone year="2020 - Project 3" title="Case Study Area"/>
        <LargeLeft imgSrc='/assets/case-study-plan.png' trans={'-100px'}/>
        <LargeRight imgSrc='/assets/stage1.png' trans="-400px"/>

        <Milestone year="2021 - Stage 1" title="Analysis of Existing Built Form"/>
        <MedLeft imgSrc='/assets/stage1.png'/>
        <SmallRight images={['/assets/exist-street.jpg', '/assets/exist-trolley.jpg']} trans="-30%" inset={true}/>

        <Milestone year="2025 - Stage 2" title="Repairs and Reinforcements"/>
        <MedLeft imgSrc='/assets/stage2.png' trans="-100px"/>
        <MedRight imgSrc="/assets/ex-build.gif" trans="-20%"/>
        <TwoCol imgsTwo={["/assets/foot.png"]} imgsOne={['/assets/STAIRS_02.jpg']}/>

        <Milestone year="2030 - Stage 3" title="Coastal Protection Zone"/>
        <MedLeft imgSrc='/assets/stage3.png' trans="-100px"/>
        <MedRight imgSrc="/assets/living-shore.jpg" trans="-20%" />
        <MedRight imgSrc="/assets/exist-failed.jpg" />

        <Milestone year="2040 - Stage 4" title="Proposed Bath House"/>
        <TwoCol imgsOne={["/assets/stage4.png"]} imgsTwo={['/assets/foot.png']} trans="-100px"/>
        <TwoCol imgsOne={["/assets/pool-01.jpg"]} imgsTwo={['/assets/pool-02.jpg']} />

        <Milestone year="2060 - Stage 5" title="Indigenous Archeological Sites"/>
        <MedLeft imgSrc='/assets/stage5.png' trans="-100px"/>
        <LargeRight imgSrc="assets/indig.jpg" trans="-20%"/>
        <SmallLeft images={['/assets/walkway.png']} trans="-20%"/>
        <LargeLeft imgSrc="/assets/WALKWAYS2.jpg" trans="160px"/>

        <Milestone year="2080 - Stage 6" title="Bath House / Sea Baths"/>
        <TwoCol imgsOne={["/assets/stage6.png"]} imgsTwo={['/assets/foot.png']} trans="-100px"/>
        <MedRight imgSrc="/assets/casting.jpg" inset={true}/>

        <Milestone year="2100 - Stage 7" title="The Artefact of Point Nepean"/>
        <TwoCol imgsOne={["/assets/stage7.png"]} imgsTwo={['/assets/final-01.jpg']} trans="-100px"/>
        <TwoCol imgsOne={["/assets/foot.png"]} imgsTwo={['/assets/final-02.jpg']} />
        <MedLeft imgSrc="/assets/final-03.jpg"/>
        <LargeRight imgSrc="/assets/final-04.jpg" trans='-15%'/>

      </div>

      <div onClick={backToTop} className='back'>Back to Top</div>
    </div>
  );
}

export default App;
