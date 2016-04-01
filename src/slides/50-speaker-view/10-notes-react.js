import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Note from 'lib/component/Note';

export default function NotesReact() {
  return (
    <Section>
      <h2>Notes with react</h2>
      <Note>
        <ul>
          <li>
            very interesting note...
          </li>
          <li>
            another interesting note...
          </li>
        </ul>
      </Note>
    </Section>
  );
}
