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
import TextBlock from './components/TextBlock';
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
      <div className="mobile-cover">
        <img src="/assets/blink.gif"/>
        <h2>Not intended for mobile.</h2>
        <p>Need another week for that.</p>
      </div>
      <div className="timeline" >
        <Milestone year="2020" title="Point Nepean Quarantine Station"/>
        <TextBlock content="The National Heritage Listing of Point Nepean Defence and Quarantine Precinct requires ‘[the] owner not allow [the] registered place or object fall into disrepair or fail to maintain it to the extent that its conservation is threatened’."/>
        <SmallRight images={['/assets/doom.gif']} inset={true} trans={'-50px'}/>
        <MedLeft imgSrc="/assets/mood-03.mp4" video={true} trans="-200px" inset={true}/>
        <LargeLeft imgSrc='/assets/plans.gif' trans={'-200px'}/>
        <TextBlock content="The National Heritage Listing of Point Nepean Defence and Quarantine Precinct requires ‘[the] owner not allow [the] registered place or object fall into disrepair or fail to maintain it to the extent that its conservation is threatened’." align='right'/>
        
        <Milestone year="2020 - Project 1" title="Reinstatement of Heritage Pier"/>
        <TextBlock content="The original Quarantine Station had a small jetty as supplies were delivered by boat from Queenscliff. While the <a href='https://ncgvic.org.au/' target='_blank'>Nepean Conservation Group</a> and <a href='https://nepeanhistoricalsociety.asn.au/' target='_blank'>Nepean Historical Society</a> support the concept of reinstating the small pedestrian historic pier, anything larger than this and prioritising access to the site from the water could damage the Ticonderoga Bay Sanctuary Zone (Dolphin Sanctuary)."/>
        <SmallRight images={["/assets/drawing.jpg"]} trans='-10%' inset={true}/>
        <LargeRight imgSrc='/assets/pier.png' trans={'-100px'}/>
        <MedLeft imgSrc='/assets/pier_short.mp4' video={true} trans="-20%"/>
        
        <Milestone year="2020 - Project 2" title="Artist-in-Residence Accommodation"/>
        <TextBlock content="The first major adaptive-reuse intervention I propose is that the existing Officers’ Accommodation buildings become artist-in-residence accommodation, in what would be an extension of the local and in demand <a href='https://www.mornpen.vic.gov.au/Activities/Arts-Culture/Police-Point-Artist-in-Residence-Program' target='_blank'>Police Point artist-in-residence program</a>." align="right"/>
        <LargeLeft imgSrc='/assets/accom.png'/>
        <SmallLeft images={['/assets/demo.jpg']} inset={true} caption="Existing Officers' Accommodation" trans={'-140px'}/>
        <SmallMiddle imgSrc='/assets/liftcore.jpg' trans={'-150px'} caption="Proposed Alterations and Additions"/>
        <SmallLeft images={['/assets/art-01.jpg', '/assets/art-02.jpg','/assets/art-03.jpg','/assets/art-04.jpg']} />
        <MedRight imgSrc="/assets/accom-plans.gif" trans={'-1000px'} inset={true}/>
        <MedRight imgSrc="/assets/typ.jpg" trans={'-200px'} inset={true}/>
        <TwoCol imgsOne={['/assets/closed.jpg']} captionOne="Artist-in-Residence: Apartment 1" imgsTwo={['/assets/open.jpg']} captionTwo="Artworks by Vincent Namatjira" trans='100px'/>

        <Milestone year="2020 - Project 3" title="Case Study Area"/>
        <LargeLeft imgSrc='/assets/case-study-plan.png' trans={'-100px'}/>
        <LargeRight imgSrc='/assets/STAGES_ANIM.gif' trans="-400px"/>
        <TextBlock content="This next project examines a small slice of the site within the heavily impacted zone of rising sea levels - over a series of 7 stages this project begins to play out over time." trans='-100px'/>

        <Milestone year="2021 - Stage 1" title="Analysis of Existing Built Form"/>
        <MedLeft imgSrc='/assets/stage1.png'/>
        <SmallRight images={['/assets/exist-street.jpg']} trans="-30%" inset={true} customClass="add-padding"/>
        <MedRight imgSrc="/assets/exist-trolley.jpg" caption="Disinfection Building and Boiler House"/>
        <TextBlock content="Firstly, the existing built form is analysed for damage and future risk level - proposed intervention is based on need and where there is adaptive re-use the level of heritage significance and current use or lack thereof has been considered." align="left-inset" trans='-100px'/>

        <Milestone year="2025 - Stage 2" title="Repairs and Reinforcements"/>
        <MedLeft imgSrc='/assets/stage2.png' trans="-100px"/>
        <MedRight imgSrc="/assets/ex-build.gif" trans="-20%" caption="Existing Hospital Building 04 -> Proposed Exhibition Building"/>
        <TextBlock content="Almost all the heritage buildings have a level of salt damp and as the sea level begins to rise the buildings will become structurally unsound. Included in my proposed repairs and reinforcements is a redesign of Hospital building no.4 which is intended to become the exhibition building at the heart of the site." trans='-50px'/>
        <TwoCol imgsTwo={["/assets/foot.png"]} imgsOne={['/assets/STAIRS_02.jpg']} trans="40px"/>

        <Milestone year="2030 - Stage 3" title="Coastal Protection Zone"/>
        <MedLeft imgSrc='/assets/stage3.png' trans="-100px"/>
        <SmallRight images={['/assets/sketch.jpg']} trans="-25%" inset={true}/>
        <TextBlock content="The failing heritage sea wall will be replaced with living shorelines, constructed from the salvaged materials from building alterations as well as new native vegetation. Living shorelines are better adapted to absorb the wave energy and accept the increasing sea level. Some shoreline structures may be lost in the process." trans='-100px'/>
        <TwoCol imgsOne={["/assets/exist-failed.jpg"]} captionOne="Heritage Sea Wall" imgsTwo={['/assets/living-shore.jpg']} captionTwo="Proposed Living Shoreline -> Reused Salavaged Materials" trans="40px"/>

        <Milestone year="2040 - Stage 4" title="Proposed Bath House"/>
        <TwoCol imgsOne={["/assets/stage4.png"]} imgsTwo={['/assets/FOOTING1.png']} trans="-100px"/>
        <TextBlock content="An alternative to merely reinforcing the crumbling heritage buildings is an opportunity to create a new use and memorial to the existing. By removing that at risk components of the heritage bath house and relining the footings with dense concrete I have reimagined the space as a shallow pool." align='right-inset'/>
        <TwoCol imgsOne={["/assets/pool-01.jpg"]} captionOne="Proposed Bath House" imgsTwo={['/assets/pool-02.jpg']} captionTwo="The local residents cooling off on a typical Melbourne 52deg evening."/>

        <Milestone year="2060 - Stage 5" title="Indigenous Archaeological Sites"/>
        <MedLeft imgSrc='/assets/stage5.png' trans="-100px"/>
        <LargeRight imgSrc="assets/indig.jpg" trans="-20%"/>
        <SmallLeft images={['/assets/walkway.png']} trans="-20%" />
        <TextBlock content="This project aims to ensure the Quarantine Station is protected in perpetuity for the public good, any additions should be sensitive to the cultural, heritage and natural environment of the site. The Heritage Act aims to protect both the place and object, objects in this case include the Indigenous Shell Middens, numerous artefact scatter and Indigenous Hearths found across the site." align='left-inset' trans='10%'/>
        <LargeLeft imgSrc="/assets/walkway_vid.mp4" video={true} caption="Proposed Shoreline Elevated Boardwalk"/>

        <Milestone year="2080 - Stage 6" title="Bath House / Sea Baths"/>
        <TwoCol imgsOne={["/assets/stage6.png"]} imgsTwo={['/assets/FOOTING2.png']} trans="-100px"/>
        <TextBlock content="As the remaining materials of the bath house further erode away, the inverted casting of the original building begins to reveal itself." align="right"/>
        <MedRight imgSrc="/assets/mood-01.mp4" inset={true} video={true} caption="Casting of Original Bath House"/>

        <Milestone year="2100 - Stage 7" title="The Artefact of Point Nepean"/>
        <TwoCol imgsOne={["/assets/stage7.png"]} imgsTwo={['/assets/final-01.jpg']} trans="-100px"/>
        <TwoCol imgsOne={["/assets/FOOTING3.png"]} imgsTwo={['/assets/final-02.jpg']} />
        <TextBlock content="With the sea level now at 1.1m higher than 2020, one last layer is added to the existing ruins and the bath house completes its transformation into sea baths." align="right"/>
        <MedLeft imgSrc="/assets/final-03.jpg"/>
        <LargeRight imgSrc="/assets/final-04.jpg" trans='-15%' caption="Bath House turned Sea Baths"/>

        <Milestone year="2100+" title="The Future"/>
        <TextBlock content="At any moment the two compulsions - obligation to maintain the fabric and the requirement for ‘economic sustainability’ - constitute the project, however the site is in a state of continual change, and ultimately the project is seen not individually but as a drama." />
        <LargeLeft imgSrc="/assets/mood-02.mp4" video={true}/>
        <TextBlock content="A baroque tragedy, where events or moments are the precondition and possibility for the future. The act of preservation and addressing climate change becomes the instrument by which we acknowledge the cost of neglecting the environment as well as offering the chance to recognise and conceptualise our time in time." contentTwo="The project considers the Point Nepean Defence and Quarantine Precinct (Mon Mon), but such a concept could also be applicable to the Alpine National Park, the Grampians National Park (Gariwerd) or Wilsons Promontory (‘Yiruk’ or ‘Wamoon’)." align='right-double'/>

        <Milestone year="Special Thanks"/>
        <TextBlock content="With special thanks to my supervisor Dr. Peter Brew for his patience and collaboration.<br/><br/>Extra special thanks to my friends and family for their unwavering support. I couldn’t have done this without you." contentTwo="Last but not least, Joel Hiller for providing university discussion during this lockdown semester and Clive Smith at the <a href='https://ncgvic.org.au/' target='_blank'>Nepean Historical Society</a> for his research assistance." align="left-double"/>


      </div>

      <div onClick={backToTop} className='back'>Back in Time</div>
    </div>
  );
}

export default App;
