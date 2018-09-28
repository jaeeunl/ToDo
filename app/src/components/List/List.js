import React from 'react';
import Masonry from 'react-masonry-component';
import Item from './ListItem/Item.js'
import axios from 'axios'
import qs from 'qs';

const favoriteItemHandler = (item) => {
    const data = { 
        id: item.id,
        title: item.title, 
        url: item.url, 
        favorite: true
    };
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url:`http://localhost:5000/favorites`
    };
 
    axios(options).then(response => {
        console.log('post response', response)
    })
}

const list = (props) => {
    const list = props.list.map((item)=> {
        return <Item 
                    key={item.id} 
                    id={item.id}
                    title={item.title} 
                    url={item.images ? item.images.downsized.url: item.url} 
                    isFavorite={item.favorite || false}
                    favoriteItem={favoriteItemHandler}/>
    })
    return (
        <section className="content">
            <Masonry className="list">
                {list}
            </Masonry>
        </section>
    );
}


export default list
