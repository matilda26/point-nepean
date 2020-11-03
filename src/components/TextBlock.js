const TextBlock = ({content, align, trans}) => {
    return (
        <div className={`grid text-block text-block--${align}`} style={{marginTop: trans }}>
            <p dangerouslySetInnerHTML={{__html: content}}></p>
        </div>
    )
}

export default TextBlock