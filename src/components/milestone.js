const Milestone = ({year, title}) => {
    return (
        <div className="milestone">
            <div className="milestone__year">{year}</div>
            <div className="milestone__title">{title}</div>
        </div>
    )
}

export default Milestone;