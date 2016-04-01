import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'none';


export default function SlideTransitionNone() {
  return (
    <Section transition={transition}>
      <h2>transition: {transition}</h2>
    </Section>
  );
}
