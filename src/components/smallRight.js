const SmallRight = ({imgSrc, caption, inset, trans, images, customClass}) => {
    return (
        <div className={`grid ${customClass}`} style={{marginTop: trans }}>
            <div className={`small-right${inset ? '--inset' : ''}`}>
                {images && images.length && images.map((item) => (
                    <img loading="lazy" src={item}/>
                ))}
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default SmallRight;