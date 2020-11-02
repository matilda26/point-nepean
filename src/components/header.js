import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect, useRef, useState } from "react"

const { default: Modal } = require("./modal")

const Header = () => {
    const [aboutState, setAboutState] = useState(false)
    const [contactState, setContactState] = useState(false)
    const targetElement = useRef()

    useEffect(() => {
        return function cleanup() {
            clearAllBodyScrollLocks()
        }
    }, [])

    const showAboutModal = () => {
        setAboutState(true)
        disableBodyScroll(targetElement);
    } 

    const hideAboutModal = () => {
        setAboutState(false)
        enableBodyScroll(targetElement);
    } 

    const showContactModal = () => {
        setContactState(true)
        disableBodyScroll(targetElement);
    } 

    const hideContactModal = () => {
        setContactState(false)
        enableBodyScroll(targetElement);
    } 

    const aboutContent = (
        <div className="modal__about">
            <div className="modal__about--left">
                <p>RMIT Architecture & Urban Design Major Project, semester 2, 2020. ‘The Artefact of Point Nepean’, by Cameron Gordon, under the supervision of Dr. Peter Brew.<br></br><br></br>The National Heritage Listing of Point Nepean Defence and Quarantine Precinct requires ‘[the] owner not allow [the] registered place or object fall into disrepair or fail to maintain it to the extent that its conservation is threatened’. With this as a condition the site was transferred from the Commonwealth to the State in 2009 and since then there has been a stream of proposals to find a commercial use. The need for the site to ‘pay it’s way’ tethers success and value in a way that justifies neglect, which raises issues as to the concept of National Significance and the notion of duty and obligation.</p>
            </div>
            <div className="modal__about--right">
                <p>At any moment the two compulsions - obligation to maintain the fabric and the requirement for ‘economic sustainability’ - constitute the project, however the site is in a state of continual change, and ultimately the project is seen not individually but as a drama. A baroque tragedy, where events or moments are the precondition and possibility for what is waiting. The act of preservation and addressing climate change becomes the instrument by which we acknowledge the cost of neglecting the environment as well as offering the chance to recognise and conceptualise our time in time.<br></br><br></br>The project considers the Point Nepean Defence and Quarantine Precinct (Mon Mon), but such a concept could also be applicable to the Alpine National Park, the Grampians National Park (Gariwerd) or Wilsons Promontory (‘Yiruk’ or ‘Wamoon’).</p>
            </div>
        </div>
    )

    const contactContent = (
        <>
             <div className="modal__inner">
                <h2>Hi, I'm Cameron</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <form name="contact" netlify>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required/>
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" required/>
                <button type="submit">Send</button>
            </form>
        </>
    )

    return (
        <>
            <header className="header">
                <h2 onClick={showContactModal} className="header__link">Cameron Gordon</h2>
                <h2 onClick={showAboutModal} className="header__link">Major Project</h2>
            </header>
            <Modal modalState={aboutState} closeModal={hideAboutModal} content={aboutContent}/>
            <Modal modalState={contactState} closeModal={hideContactModal} content={contactContent}/>
        </>
    )
} 

export default Header;