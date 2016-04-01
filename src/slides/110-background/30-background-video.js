import React, { Component } from 'react';
import Section from 'lib/component/Section';

export default class BackgroundVideo extends Component {

  render() {
    return (
      <Section
        backgroundVideo="https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4,https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.webm">
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.9)', color: '#fff', padding: '20px'}}>
          <h2>Video Background</h2>
        </div>
      </Section>
    );
  }
}
