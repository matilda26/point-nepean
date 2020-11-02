const SmallLeft = ({imgSrc, caption, inset, trans, images}) => {
    return (
        <div className="grid"  style={{marginTop: trans }}>
            <div className={`small-left${inset ? '--inset' : ''}`}>
                {images && images.length && images.map((item) => (
                    <img loading="lazy" src={item}/>
                ))}
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default SmallLeft;