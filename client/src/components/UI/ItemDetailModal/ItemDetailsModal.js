import React from 'react'

const itemDetails = (props) => {
    return (
        <div className="item-details">
            <div className="item-details-container">
                <span 
                    className="close-modal"
                    onClick={props.closeItemDetails}>
                    close
                </span>
                <textarea 
                    value={props.currentDetailsValue}
                    onChange={props.updateDetails}
                        />
            </div>          
        </div>
    )
}

export default itemDetails