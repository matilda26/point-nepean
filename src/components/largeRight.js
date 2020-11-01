const LargeRight = ({imgSrc, caption, trans}) => {
    return (
        <div className="grid" data-scroll-section style={{marginTop: trans }}>
            <div className="large-right">
                <img src={imgSrc} data-scroll/>
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default LargeRight;