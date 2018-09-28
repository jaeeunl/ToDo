import React from 'react';

const item = (props) => {
    const favoriteCaption = props.isFavorite === false ? 'add to favorites' : 'remove from favorites'

    return (
        <article 
            onClick={(e)=>props.favoriteItem(props)} 
            isFavoriteItem={props.isFavorite}
         >
            <div className="img-overlay">
                <p>{favoriteCaption}</p>
            </div>
            <img src={props.url} alt={props.title} />
        </article>
    );
}

export default item
