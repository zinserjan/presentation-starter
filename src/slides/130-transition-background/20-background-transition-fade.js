import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'fade';


export default function BackgroundTransitionFade() {
  return (
    <Section background="#b5533c" backgroundTransition={transition}>
      <h2>backgroundTransition: {transition}</h2>
    </Section>
  );
}
