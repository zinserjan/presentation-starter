import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'zoom';


export default function BackgroundTransitionZoom() {
  return (
    <Section background="#b5533c" backgroundTransition={transition}>
      <h2>backgroundTransition: {transition}</h2>
    </Section>
  );
}
