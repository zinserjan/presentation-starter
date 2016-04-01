import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'convex';


export default function BackgroundTransitionConvex() {
  return (
    <Section background="#b5533c" backgroundTransition={transition}>
      <h2>backgroundTransition: {transition}</h2>
    </Section>
  );
}
