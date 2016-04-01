import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'none';


export default function BackgroundTransitionNone() {
  return (
    <Section background="#4d7e65" backgroundTransition={transition}>
      <h2>backgroundTransition: {transition}</h2>
    </Section>
  );
}
