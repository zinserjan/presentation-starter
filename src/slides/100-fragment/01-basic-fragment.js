import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Fragment from 'lib/component/Fragment';

export default class BasicFragment extends Component {

  render() {
    return (
      <Section>
        <p>Hit the next arrow...</p>
        <Fragment>... to step through ...</Fragment>
        <Fragment>... a fragmented slide.</Fragment>
      </Section>
    );
  }
}
