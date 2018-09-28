import React from 'react'

const newItemInput = (props) => {
    const stopPropagation = (e) => e.stopPropagation()
    return (
        <input 
            type="text" 
            onClick={stopPropagation} 
            onKeyPress={props.endAddItem}
            onBlur={(e) => props.endAddItem(e)}
            autoFocus />
    )
}

export default newItemInput