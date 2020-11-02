const LargeLeft = ({imgSrc, caption, trans, video}) => {
    return (
        <div className="grid"  style={{marginTop: trans }}>
            <div className="large-left">
                {!!video ? (<video src={imgSrc} playsInline autoPlay muted loop />) : (
                    <img loading="lazy" src={imgSrc}/>
                )}
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default LargeLeft;