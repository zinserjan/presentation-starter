import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Fragment from 'lib/component/Fragment';

export default class StyledFragment extends Component {

  render() {
    return (
      <Section>
        <h2>Fragment Styles</h2>
        <p>There's different types of fragments, like:</p>
        <Fragment>fade-in</Fragment>
        <Fragment effect="grow">grow</Fragment>
        <Fragment effect="shrink">shrink</Fragment>
        <Fragment effect="fade-out">fade-out</Fragment>
        <Fragment effect="current-visible">current-visible</Fragment>
        <p>
          <span>Highlight </span>
          <Fragment tag="span" effect="highlight-current-red">red </Fragment>
          <Fragment tag="span" effect="highlight-current-blue">blue </Fragment>
          <Fragment tag="span" effect="highlight-current-green">green </Fragment>
        </p>
      </Section>
    );
  }
}
