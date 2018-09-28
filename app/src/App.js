import React, { Component } from 'react';
import Boards from './components/Boards/Boards.js'
// import Search from './components/Search/Search.js'
// import Favorites from './components/Favorites/Favorites.js'
import './App.scss';


class App extends Component {
  state = {
    boards: [
      {
        name: 'Winnie',
        cards: [
          {},
          {}
        ]
      },
      {
        name: 'Bob',
        cards: [
          {},
          {}
        ]
      },
      {
        name: 'Thomas',
        cards: [
          {},
          {}
        ]
      },
      {
        name: 'George',
        cards: [
          {},
          {}
        ]
      }
    ]
  }
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
  render() {
    return (
        <div className="kanban">
          <Boards boards={this.state.boards} />
        </div>
    );
  }
}

export default App;



