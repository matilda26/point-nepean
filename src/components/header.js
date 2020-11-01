import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect, useRef, useState } from "react"

const { default: Modal } = require("./modal")

const Header = () => {
    const [modalState, setModalState] = useState(false)
    const targetElement = useRef()

    useEffect(() => {
        return function cleanup() {
            clearAllBodyScrollLocks()
        }
    }, [])

    const showModal = () => {
        setModalState(true)
        disableBodyScroll(targetElement);
    } 

    const hideModal = () => {
        setModalState(false)
        enableBodyScroll(targetElement);
    } 

    return (
        <>
            <header className="header">
                <h2 onClick={showModal} className="header__link cameron">Cameron Gordon</h2>
                <h2 className="header__link">Major Project</h2>
            </header>
            <Modal modalState={modalState} closeModal={hideModal}/>
        </>
    )
} 

export default Header;