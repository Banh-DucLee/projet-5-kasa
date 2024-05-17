import '../styles/Tag.scss';

function Tag({tag}) {
    return <div className="tag">
        <h3 className="tag-text">{tag}</h3>
    </div>
}

export default Tag;