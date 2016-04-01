import React, { Component } from 'react';
import Section from 'lib/component/Section';

import Counter from '../example/component/Counter';

export default function Interactive() {
  return (
    <Section>
      <h2>your presentations are interactive</h2>
      <div>
        <Counter />
      </div>
    </Section>
  );
}
