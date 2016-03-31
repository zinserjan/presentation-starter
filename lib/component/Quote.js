import React, { Component, PropTypes } from 'react';

export default class Quote extends Component {

  static propTypes = {
    /**
     * text for quote
     */
    text: PropTypes.string,
    /**
     * Source of quote
     */
    reference: PropTypes.string,
  };

  static defaultProps = {
    reference: ''
  };

  render() {
    const { text, reference, ...props } = this.props;

    return (
      <q {...props} cite={reference}>
        {text}
      </q>
    );
  }
}
