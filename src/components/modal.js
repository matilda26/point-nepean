const Modal = ({modalState, closeModal}) => {
    return (
        <div className={`modal ${!!modalState ? 'modal--open' : 'modal--closed'}`}>
            <div className="modal__cross" onClick={closeModal}>Close</div>
            <div className="modal__inner">
                <h2>Hi, I'm Cameron</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <form>
                <label for="name">Name</label>
                <input type="text" name="name" />
                <label for="email">Email</label>
                <input type="email" name="email" />
                <label for="message">Message</label>
                <textarea type="text" name="message" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Modal