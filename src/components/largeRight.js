const LargeRight = ({imgSrc, caption, trans}) => {
    return (
        <div className="grid" data-scroll-section style={{marginTop: trans + 'px'}}>
            <div className="large-right">
                <img src={imgSrc} data-scroll data-scroll-position="bottom" data-scroll-speed="9"/>
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default LargeRight;