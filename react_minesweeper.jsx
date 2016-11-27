import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game';

class Main extends React.Component {
  render () {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Main />, document.getElementById("main"));
});
