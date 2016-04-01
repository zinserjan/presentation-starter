import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Fragment from 'lib/component/Fragment';

export default class ControlledFragment extends Component {

  render() {
    return (
      <Section>
        <p>define order of fragments</p>
        <Fragment index={2}>shown as second</Fragment>
        <Fragment index={1}>shown as first</Fragment>
      </Section>
    );
  }
}
