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
    if (this.props.tile.flagged) {
      return ('tile-flagged');
    }
    if ((this.props.tile.bombed && this.props.tile.explored) || (this.props.over && this.props.tile.bombed)) {
      return ("tile-bombed");
    }
    if (this.props.tile.explored) {
      return ("tile-revealed");
    }
    return ("");
  }

  render () {
    let classes = `game-tile ${this.tileContent()}`;
    let adjacentCount = "";
    if (this.props.tile.explored && !this.props.tile.bombed) {
      if (this.props.tile.adjacentBombCount() > 0) {
        adjacentCount = this.props.tile.adjacentBombCount();
      }
    }

    return (
      <div className={classes} onClick={this.handleClick}>{adjacentCount}</div>
    );
  }

  handleClick (e) {
    if (!this.props.over) {
      this.props.update(this.props.tile, e.altKey);
    }
    // debugger
  }
}

export default TileComponent;
