import React from 'react'

const completeItem = (props) => {
    return (
        <i
            className="complete-item"
            onClick={(e) => props.toggleItemComplete(e, props.index) }/>
    )
}

export default completeItem