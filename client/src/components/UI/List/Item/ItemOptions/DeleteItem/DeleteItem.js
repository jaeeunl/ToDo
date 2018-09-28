import React from 'react'

const deleteItem = (props) => {
    return (
        <span 
            className="delete-item"
            onClick={(e) => props.deleteItem(e, props.index) }>
            Delete
        </span> 
    )
}

export default deleteItem