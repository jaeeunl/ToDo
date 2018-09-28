import React from 'react'
import NewItemInput from './NewItemInput/NewItemInput'

const addItem = (props) => {
    return (
        <li className="item new" onClick={() => props.editAddItem(props.isActive) }>
            <i className="add-item"/>
            {props.isEditing ? <NewItemInput endAddItem={props.endAddItem} /> : null}
        </li>
    )
}

export default addItem