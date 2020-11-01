const LargeLeft = ({imgSrc, caption, trans}) => {
    return (
        <div className="grid" data-scroll-section style={{marginTop: trans + 'px'}}>
            <div className="large-left">
                <img src={imgSrc} data-scroll/>
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default LargeLeft;