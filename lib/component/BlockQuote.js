import React, { Component, PropTypes } from 'react';

export default class BlockQuote extends Component {

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
      <blockquote {...props} cite={reference}>
        {text}
      </blockquote>
    );
  }
}
