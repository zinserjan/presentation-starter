import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'slide';


export default function BackgroundTransitionSlide() {
  return (
    <Section background="#4d7e65" backgroundTransition={transition}>
      <h2>backgroundTransition: {transition}</h2>
    </Section>
  );
}
