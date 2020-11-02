const TwoCol = ({imgsOne, imgsTwo, caption, inset, trans}) => {
    return (
        <div className="grid"  style={{marginTop: trans }}>
            <div className={`two-col-one${inset ? '--inset' : ''}`}>
                {imgsOne && imgsOne.length && imgsOne.map((item) => (
                    <img loading="lazy" src={item} />
                ))}
                {caption && <p>{caption}</p>}
            </div>
            <div className={`two-col-two${inset ? '--inset' : ''}`}>
                {imgsTwo && imgsTwo.length && imgsTwo.map((item) => (
                    <img loading="lazy" src={item} />
                ))}
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default TwoCol;