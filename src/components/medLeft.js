const MedLeft = ({imgSrc, caption, inset, trans, video, id}) => {
    return (
        <div className="grid" data-scroll-section style={{marginTop: trans }} id={id}>
            <div className={`med-left${inset ? '--inset' : ''} ${!!video && 'js-player'}`}>
                {!!video ? (<video src={imgSrc} playsInline autoPlay muted loop />) : (
                    <img src={imgSrc} data-scroll/>
                )}
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default MedLeft;