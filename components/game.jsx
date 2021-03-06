import React from 'react';
import * as Minesweeper from '../minesweeper';

import BoardComponent from './board';
import TileComponent from './tile';

class Game extends React.Component {
  constructor() {
    super();

    let gameBoard = new Minesweeper.Board(10,10);
    this.state = {
      board: new Minesweeper.Board(10,10)
    };

    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  restartGame (e) {
    // debugger
    console.log('resetting');
    this.setState({
      board: new Minesweeper.Board(10,9),
      won: false,
      lost: false
    });

    this.forceUpdate();
  }

  componentDidUpdate() {
    // debugger
  }

  updateGame (tile, altkey) {
    if (altkey) {
      // debugger
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({
      board: this.state.board,
      won: this.state.board.won(),
      lost: this.state.board.lost()
    });
  }

  render () {
    return (
      <div>
        <BoardComponent board={this.state.board} update={this.updateGame} />
        <section className="button-controls">
         <button onClick={this.restartGame}>🙂</button>
        </section>
      </div>
    );
  }
}

export default Game;
