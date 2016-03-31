import React, { Component, PropTypes } from 'react';


export default class Note extends Component {

  static propTypes = {
    children: PropTypes.node,
  };


  render() {
    const { children } = this.props;

    return (
      <aside className="notes">
        {children}
      </aside>
    );
  }
}
