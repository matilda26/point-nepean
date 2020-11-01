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
        <>
           
        </>
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