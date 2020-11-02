const MedRight = ({imgSrc, caption, inset, trans, large, video}) => {
    return (
        <div className="grid" style={{marginTop: trans }}>
            <div className={`med-right${inset ? '--inset' : ''}`}>
                {!!video ? (<video src={imgSrc} playsInline autoPlay muted loop />) : (
                    <img loading="lazy" src={imgSrc}/>
                )}
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default MedRight;