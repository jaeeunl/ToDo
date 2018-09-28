import React from 'react'
import DeleteItem from './DeleteItem/DeleteItem'
import EditItem from './EditDetails/EditDetails'

const itemOptions = (props) => {
    return (
        <div className="item-options">
            <EditItem 
                index={props.index}
                editDetails={props.editDetails}
                isModalOpen={props.isModalOpen}
                />
            <DeleteItem 
                index={props.index}
                deleteItem={props.deleteItem}
                />
        </div>
    )
}

export default itemOptions