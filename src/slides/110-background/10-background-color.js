import React, { Component } from 'react';
import Section from 'lib/component/Section';

export default class BackgroundColor extends Component {

  render() {
    return (
      <Section background="#dddddd">
        <h2>Color Background</h2>
        <p>All CSS color formats are supported.</p>
      </Section>

    );
  }
}
