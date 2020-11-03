const TextBlock = ({content, contentTwo, align, trans}) => {
    return (
        <div className={`grid text-block text-block--${align}`} style={{marginTop: trans }}>
            <p dangerouslySetInnerHTML={{__html: content}}></p>
            {contentTwo && <p dangerouslySetInnerHTML={{__html: contentTwo}}></p>}
        </div>
    )
}

export default TextBlock