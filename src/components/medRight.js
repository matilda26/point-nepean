const MedRight = ({imgSrc, caption, inset, trans, large}) => {
    return (
        <div className="grid" data-scroll-section style={{marginTop: trans }}>
            <div className={`med-right${inset ? '--inset' : ''}`}>
                <img src={imgSrc} data-scroll/>
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default MedRight;