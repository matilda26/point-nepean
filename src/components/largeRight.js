const LargeRight = ({imgSrc, caption, trans}) => {
    return (
        <div className="grid"  style={{marginTop: trans }}>
            <div className="large-right">
                <img loading="lazy" src={imgSrc} />
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default LargeRight;