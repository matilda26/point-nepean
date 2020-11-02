const TwoCol = ({imgsOne, imgsTwo, captionOne, captionTwo, inset, trans}) => {
    return (
        <div className="grid"  style={{marginTop: trans }}>
            <div className={`two-col-one${inset ? '--inset' : ''}`}>
                {imgsOne && imgsOne.length && imgsOne.map((item) => (
                    <img loading="lazy" src={item} />
                ))}
                {captionOne && <p>{captionOne}</p>}
            </div>
            <div className={`two-col-two${inset ? '--inset' : ''}`}>
                {imgsTwo && imgsTwo.length && imgsTwo.map((item) => (
                    <img loading="lazy" src={item} />
                ))}
                {captionTwo && <p>{captionTwo}</p>}
            </div>
        </div>
    )
}

export default TwoCol;