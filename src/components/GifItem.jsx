import PropTypes from 'prop-types'

export function GifItem( {title, url, id} ) {
    
    // console.log({title, url})
    
    return (
        <div className="card">                  
            <img src={url}  alt={title} />
            <p> {title} </p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url  : PropTypes.string.isRequired,
}