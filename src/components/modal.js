const Modal = ({modalState, closeModal, content}) => {
    return (
        <div className={`modal ${!!modalState ? 'modal--open' : 'modal--closed'}`}>
            <div className="grid">
                <div className="modal__cross" onClick={closeModal}>Close</div>
                {content}
            </div>
        </div>
    )
}

export default Modal