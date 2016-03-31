// revealjs style
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';

// highlight.js style
import 'highlight.js/styles/zenburn.css'


// plugins
// Note: reveal.js plugins returns always file urls
import zoomUrl from 'reveal.js/plugin/zoom-js/zoom';
import notesUrl from 'reveal.js/plugin/notes/notes';
import 'reveal.js/plugin/notes/notes.html';

export default {
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  slideNumber: 'h.v',
  dependencies: [
    { src: zoomUrl, async: true },
    { src: notesUrl, async: true }
  ]
}
