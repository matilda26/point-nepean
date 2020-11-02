const SmallLeft = ({imgSrc, captions, inset, trans, images}) => {
    return (
        <div className="grid" style={{marginTop: trans }}>
            <div className={`small-left${inset ? '--inset' : ''}`}>
                {images && images.length && images.map((item, index) => (
                    <>
                    <img loading="lazy" src={item}/>
                    {captions && captions.length && <p>{captions[index]}</p>}
                    </>
                ))}
            </div>
        </div>
    )
}

export default SmallLeft;