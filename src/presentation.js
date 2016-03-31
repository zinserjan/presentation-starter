import React from 'react';
import ReactDOM from "react-dom";
import naturalSort from 'javascript-natural-sort';

import Deck from 'lib/component/Deck';
import buildFileTree, { mapTree } from 'lib/helper/fileTree';

import 'style/presentation.scss';
import options from './options';

function getSlides() {
  // regex info: matches js & md files two folders deep
  const context = require.context("./slides", true, /^\/?([^\/]+\/?){0,3}(js|md)$/);
  const files = context.keys().sort(naturalSort);

  const fileTree = buildFileTree(files, 1);
  const slides = mapTree(fileTree, (file) => {
    const slide = context(file);
    return slide.default ? slide.default : slide
  });

  return [context, slides, files];
}

function renderSlideDeck(slides) {
  ReactDOM.render(<Deck slides={slides} options={options}/>, document.getElementById('reveal'));
}


let [context, slides, files] = getSlides();

renderSlideDeck(slides);

if (module.hot) {
  module.hot.accept(context.id, function () {
    const len = files.length;
    [context, slides, files] = getSlides();

    if (len !== files.length) {
      throw new Error("Cannot update because slide count changed");
    }

    // render slide deck
    renderSlideDeck(slides);

    // refresh reveal.js
    const state = global.Reveal.getState();
    global.Reveal.sync();
    global.Reveal.setState(state);
  })
}
