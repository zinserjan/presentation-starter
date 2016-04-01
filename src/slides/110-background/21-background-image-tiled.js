import React, { Component } from 'react';
import Section from 'lib/component/Section';

export default class BackgroundImageTiled extends Component {

  render() {
    return (
      <Section background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png"
               backgroundRepeat="repeat"
               backgroundSize="100px"
      >
        <h2>Tiled Backgrounds</h2>
      </Section>
    );
  }
}
