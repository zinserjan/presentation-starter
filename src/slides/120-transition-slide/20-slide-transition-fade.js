import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'fade';


export default function SlideTransitionFade() {
  return (
    <Section transition={transition}>
      <h2>transition: {transition}</h2>
    </Section>
  );
}
