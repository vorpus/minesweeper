import React from 'react';

class TileComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      tile: this.props.tile
    };

    this.tileContent = this.tileContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  tileContent () {
    // debugger
    if (this.state.tile.flagged) {
      return ('tile-flagged');
    }
    if ((this.state.tile.bombed && this.state.tile.explored) || (this.props.over && this.state.tile.bombed)) {
      return ("tile-bombed");
    }
    if (this.state.tile.explored) {
      return ("tile-revealed");
    }
  }

  render () {

    let classes = `game-tile ${this.tileContent()}`;
    let adjacentCount = "";
    if (this.state.tile.explored && !this.state.tile.bombed) {
      if (this.state.tile.adjacentBombCount() > 0) {
        adjacentCount = this.state.tile.adjacentBombCount();
      }
    }

    return (
      <div className={classes} onClick={this.handleClick}>{adjacentCount}</div>
    );
  }

  handleClick (e) {
    this.props.update(this.state.tile, e.altKey);
    // debugger
  }
}

export default TileComponent;
