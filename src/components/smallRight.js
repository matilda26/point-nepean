const SmallRight = ({imgSrc, caption, inset, trans}) => {
    return (
        <div className="grid" data-scroll-section style={{marginTop: trans + 'px'}}>
            <div className={`small-right${inset ? '--inset' : ''}`}>
                <img src={imgSrc} data-scroll data-scroll-position="bottom" data-scroll-speed="9"/>
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default SmallRight;