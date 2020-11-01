const TwoCol = ({imgsOne, imgsTwo, caption, inset, trans}) => {
    return (
        <div className="grid" data-scroll-section style={{marginTop: trans }}>
            <div className={`two-col-one${inset ? '--inset' : ''}`}>
                {imgsOne && imgsOne.length && imgsOne.map((item) => (
                    <img src={item} data-scroll data-scroll-speed="-1"/>
                ))}
                {caption && <p>{caption}</p>}
            </div>
            <div className={`two-col-two${inset ? '--inset' : ''}`}>
                {imgsTwo && imgsTwo.length && imgsTwo.map((item) => (
                    <img src={item} data-scroll data-scroll-speed="-1"/>
                ))}
                {caption && <p>{caption}</p>}
            </div>
        </div>
    )
}

export default TwoCol;