import '../styles/Banner.scss';

function Banner({imageUrl, text, opacity}) {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`
    };

    const darkenStyle = {
        backgroundColor: `rgba(0, 0, 0, ${opacity})`
    };

    return <div className="banner" style={backgroundStyle}>
        <span className="darkenLayer" style={darkenStyle}></span>
        {text && <h2 dangerouslySetInnerHTML={{__html: text}}></h2>}
    </div>
};
export default Banner;