const SmallMiddle = ({imgSrc, caption, inset, trans}) => {
    return (
        <div className="grid" data-scroll-section style={{marginTop: trans }}>
            <div className={`small-middle${inset ? '--inset' : ''}`}>
                <img src={imgSrc} data-scroll/>
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default SmallMiddle;