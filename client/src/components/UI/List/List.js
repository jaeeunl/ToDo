import React from 'react'

import Item from './Item/Item'
import AddItem from './AddItem/AddItem'

const list = (props) => {
    const items = props.list.map((item, index) => {
        return (<Item 
            key={index}
            index={index}
            isEditing={item.isEditing}
            isComplete={item.isComplete}
            isDeleted={item.isDeleted}
            title={item.title}
            editItem={props.editItem}
            updateItem={props.updateItem}
            endEditingItem={props.endEditingItem}
            toggleItemComplete={props.toggleItemComplete}
            deleteItem={props.deleteItem}
            editDetails={props.editItemDetails}
            isModalOpen={props.isModalOpen}
            />
        )
    })

    return (
        <ul>
            {items}
            <AddItem 
                isEditing={props.addItemActive}
                editAddItem={props.editAddItem}
                endAddItem={props.endAddItem}
                />
        </ul>
    )
}

export default list