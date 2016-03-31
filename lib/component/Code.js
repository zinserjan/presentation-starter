import React, { Component, PropTypes } from 'react';
import {supportedLanguages, highlightBlock}  from '../helper/highlight';

export default class Code extends Component {

  static propTypes = {
    /**
     * language of code
     */
    language: PropTypes.oneOf(supportedLanguages).isRequired,
    /**
     * source code
     */
    source: PropTypes.string.isRequired,
  };


  highlightCode() {
    const {language} = this.props;
    const el = this.refs.code;
    highlightBlock(language, el);
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  render() {
    const {className, language, source, ...props } = this.props;
    const cName = [className, language].filter(Boolean).join(' ');

    return (
      <pre>
        <code {...props} className={cName} ref="code">
          {source}
        </code>
      </pre>
    );
  }
}
