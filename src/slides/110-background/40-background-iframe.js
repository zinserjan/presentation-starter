import React, { Component } from 'react';
import Section from 'lib/component/Section';

export default class BackgroundIFrame extends Component {

  render() {
    return (
      <Section backgroundIframe="https://facebook.github.io/react/">
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.9)', color: '#fff', padding: '20px'}}>
          <h2>Iframe</h2>
        </div>
      </Section>
    );
  }
}
