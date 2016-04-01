import React, { Component } from 'react';
import Section from 'lib/component/Section';

export default class BackgroundImage extends Component {

  render() {
    return (
      <Section background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png">
        <h2>Image Backgrounds</h2>
      </Section>
    );
  }
}
