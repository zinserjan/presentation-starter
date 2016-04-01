import React, { Component } from 'react';
import Section from 'lib/component/Section';

export default class BackgroundGif extends Component {

  render() {
    return (
      <Section background="http://i.giphy.com/90F8aUepslB84.gif">
        <h1>... and Gifs!</h1>
      </Section>
    );
  }
}
