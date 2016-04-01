import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'convex';


export default function SlideTransitionConvex() {
  return (
    <Section transition={transition}>
      <h2>transition: {transition}</h2>
    </Section>
  );
}
