import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'zoom';


export default function SlideTransitionZoom() {
  return (
    <Section backgroundTransition={transition}>
      <h2>transition: {transition}</h2>
      <p>Note: does not work on vertical slides</p>
    </Section>
  );
}
