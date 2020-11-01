const SmallLeft = ({imgSrc, caption, inset, trans, images}) => {
    return (
        <div className="grid" data-scroll-section style={{marginTop: trans }}>
            <div className={`small-left${inset ? '--inset' : ''}`}>
                {images && images.length && images.map((item) => (
                    <img src={item} data-scroll data-scroll-speed="-1"/>
                ))}
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default SmallLeft;