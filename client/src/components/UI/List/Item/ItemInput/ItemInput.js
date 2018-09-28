import React from 'react'

const itemInput = (props) => {
    const stopPropagation = (e) => {
        e.stopPropagation()
    }
    return (
        <input 
            type="text" 
            onClick={stopPropagation} 
            onKeyPress={props.endEditingItem}
            onBlur={(e) => props.endEditingItem(e)}
            value={props.value}
            onChange={props.updateItem}
            autoFocus />
    )
}

export default itemInput