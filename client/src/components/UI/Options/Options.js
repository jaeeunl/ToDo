import React from 'react'

const options = (props) => {
    return (
        <ul className="display-options">
            <li 
                className="option-show-completed"
                onClick={props.toggleShowCompleted}>
                    {props.isShowingCompleted ? 'Hide completed' : 'Show completed'}
            </li>
            <li 
                className="option-show-deleted"
                onClick={props.toggleShowDeleted}>
                    {props.isShowingDeleted ? 'Hide deleted' : 'Show deleted'}       
            </li>
        </ul>
    )
}

export default options