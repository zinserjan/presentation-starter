import React, { Component } from 'react';

export default class Counter extends Component {

  state = {
    clicked: 0
  };

  onClick = (e) => {
    const { clicked } = this.state;
    this.setState({
      clicked: clicked + 1
    });
  };

  render() {
    const { clicked } = this.state;

    return (
      <div>
        <Choose>
          <When condition={clicked < 3}>
            <div>
              The button has been clicked {clicked} times
            </div>
            <button onClick={this.onClick}>CLICK ME</button>
          </When>
          <Otherwise>
              <h2>Enough... :)</h2>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}
