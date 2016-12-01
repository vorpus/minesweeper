import React from 'react';
import Tile from './tile';

class BoardComponent extends React.Component {
  constructor (props) {
    super(props);

    this.update = this.props.update;
    this.renderRow = this.renderRow.bind(this);
    this.renderTile = this.renderTile.bind(this);
  }

  render () {
    return (
      <div className="game-board group">
        {this.renderRow()}
      </div>
    );
  }


  renderRow () {
    return this.props.board.grid.map((row, idx) => {
      return (
        <div className="game-row group" key={`row+${idx}`}>
          {this.renderTile(row)}
        </div>
      );
    });
  }

  renderTile (row) {
    let over = (this.props.board.won() || this.props.board.lost());
    return row.map((tile, idx) => {
      return (
        <Tile board={this.board} key={idx} tile={tile} over={over} update={this.update}/>
      );
    });
  }
}

export default BoardComponent;
