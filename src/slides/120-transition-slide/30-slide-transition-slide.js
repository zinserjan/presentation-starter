import React, { Component } from 'react';
import Section from 'lib/component/Section';

const transition = 'slide';


export default function SlideTransitionSlide() {
  return (
    <Section transition={transition}>
      <h2>transition: {transition}</h2>
    </Section>
  );
}
