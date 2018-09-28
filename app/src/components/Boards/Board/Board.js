import React, {Component} from 'react'
import Card from './Card/Card.js'

class Column extends Component {
    const card = props.cards.map((c, index) => <Card key={index} />)
    addCardHandler = (boardIndex) => {
        const newCard = window.prompt()
        console.log(boardIndex, newCard)
        if(newCard) {
          const updatedBoard = this.state.boards[boardIndex].cards.push({})
          this.setState({
          //  boards: boards[boardIndex].cards
          })
        }
      }
    render () {
        return (
            <div className="board" id={props.name} >
                <div className="board-title" >
                    {props.name}
                </div>
                <div className="board-content">
                    {card}
                </div>
                <div className="addCard" onClick={ ()=>{props.addCardHandler(props.index)}}>
                    + Add a card
                </div>
            </div>
        )
    }

}

export default Column