import React from 'react'
import Board from './Board/Board.js'

const boards = (props) => {
    const boards = props.boards.map((b, index) => {
        return (
            <Board 
                key={index} 
                index={index}
                name={b.name} 
                cards={b.cards}
                addCardHandler={props.addCardHandler}
            />
        )
    })

    return (
        <div className="boards">
            {boards}
        </div>
    )
}

export default boards