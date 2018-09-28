import React from 'react'

const editDetails = (props) => {
    return (
        <span 
            className="edit-item"
            onClick={(e) => props.editDetails(e, props.index) }>
            {props.isModalOpen ? 'Done' : 'Edit'}
        </span> 
    )
}

export default editDetails