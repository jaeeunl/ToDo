import React from 'react'
import ItemInput from './ItemInput/ItemInput'
import CompleteItem from './CompleteItem/CompleteItem'
import ItemOptions from './ItemOptions/ItemOptions'

const item = (props) => {
    let listClass = 'item'
    if (props.isComplete) listClass = listClass + ' complete' 
    if (props.isDeleted) listClass = listClass + ' deleted' 

    return (
        <li className={listClass} onClick={() => props.editItem(props.index) }>
            <CompleteItem
                index = {props.index}
                toggleItemComplete={props.toggleItemComplete}
                />
            {props.isEditing ? 
                <ItemInput 
                    value={props.title} 
                    updateItem={props.updateItem} 
                    endEditingItem={props.endEditingItem}/> : 
                    props.title}
            <ItemOptions 
                index={props.index}
                editDetails={props.editDetails}
                deleteItem={props.deleteItem}
                isModalOpen={props.isModalOpen}
                />
        </li>
    )
}

export default item