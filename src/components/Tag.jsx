import '../styles/Tag.scss';

function Tag({tags}) {
    return <div className="tags-container">
        {tags.map((tag) => (
            <div className="tag" key={tag}>
                <h3 className="tag-text">{tag}</h3>
            </div>
        ))}
    </div>
}

export default Tag;