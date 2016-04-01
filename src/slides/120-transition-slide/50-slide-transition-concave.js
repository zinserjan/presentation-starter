import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'concave';


export default function SlideTransitionConcave() {
  return (
    <Section transition={transition}>
      <h2>transition: {transition}</h2>
    </Section>
  );
}
