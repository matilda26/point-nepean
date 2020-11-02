const SmallMiddle = ({imgSrc, caption, inset, trans}) => {
    return (
        <div className="grid"  style={{marginTop: trans }}>
            <div className={`small-middle${inset ? '--inset' : ''}`}>
                <img loading="lazy" src={imgSrc} />
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default SmallMiddle;