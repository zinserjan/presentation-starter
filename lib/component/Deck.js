import React, { Component, PropTypes } from 'react';

if (window.location.search.match(/print-pdf/gi)) {
  require('reveal.js/css/print/pdf.css');
} else {
  require('reveal.js/css/print/paper.css');
}

if (!document.body.classList) {
  require("script!reveal.js/lib/js/classList.js");
}

require("script!reveal.js/lib/js/head.min.js");
require("script!reveal.js/js/reveal.js");


import Section from './Section';


export default class Deck extends Component {

  static propTypes = {
    /**
     * reveal.js options
     */
    options: PropTypes.shape({
      // Configuration
      /**
       * Display controls in the bottom right corner
       */
      controls: PropTypes.bool,
      /**
       * Display a presentation progress bar
       */
      progress: PropTypes.bool,
      /**
       * Display the page number of the current slide
       */
      slideNumber: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
      ]),
      /**
       * Push each slide change to the browser history
       */
      history: PropTypes.bool,
      /**
       * Enable keyboard shortcuts for navigation
       */
      keyboard: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
      ]),
      /**
       * Enable the slide overview mode
       */
      overview: PropTypes.bool,
      /**
       * Vertical centering of slides
       */
      center: PropTypes.bool,
      /**
       * Enables touch navigation on devices with touch input
       */
      touch: PropTypes.bool,
      /**
       * Loop the presentation
       */
      loop: PropTypes.bool,
      /**
       * Change the presentation direction to be RTL
       */
      rtl: PropTypes.bool,
      /**
       * Turns fragments on and off globally
       */
      fragments: PropTypes.bool,
      /**
       * Flags if the presentation is running in an embedded mode,
       * i.e. contained within a limited portion of the screen
       */
      embedded: PropTypes.bool,
      /**
       * Flags if we should show a help overlay when the questionmark
       * key is pressed
       */
      help: PropTypes.bool,
      /**
       * Flags if speaker notes should be visible to all viewers
       */
      showNotes: PropTypes.bool,
      /**
       * Number of milliseconds between automatically proceeding to the
       * next slide, disabled when set to 0, this value can be overwritten
       * by using a data-autoslide attribute on your slides
       */
      autoSlide: PropTypes.number,
      /**
       * Stop auto-sliding after user input
       */
      autoSlideStoppable: PropTypes.bool,
      /**
       * Enable slide navigation via mouse wheel
       */
      mouseWheel: PropTypes.bool,
      /**
       * Hides the address bar on mobile devices
       */
      hideAddressBar: PropTypes.bool,
      /**
       * Opens links in an iframe preview overlay
       */
      previewLinks: PropTypes.bool,
      /**
       * Transition style
       */
      transition: PropTypes.oneOf(['default', 'none', 'fade', 'slide', 'convex', 'concave', 'zoom']),
      /**
       * Transition speed
       */
      transitionSpeed: PropTypes.oneOf(['default', 'fast', 'slow']),
      /**
       * Transition style for full page slide backgrounds
       */
      backgroundTransition: PropTypes.oneOf(['default', 'none', 'fade', 'slide', 'convex', 'concave', 'zoom']),
      /**
       * Number of slides away from the current that are visible
       */
      viewDistance: PropTypes.number,
      /**
       * Parallax background image
       * e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"
       */
      parallaxBackgroundImage: PropTypes.string,
      /**
       * Parallax background size
       * CSS syntax, e.g. "2100px 900px"
       */
      parallaxBackgroundSize: PropTypes.string,
      /**
       * Number of pixels to move the parallax background per slide
       * - Calculated automatically unless specified
       * - Set to 0 to disable movement along an axis
       */
      parallaxBackgroundHorizontal: PropTypes.number,
      /**
       * Number of pixels to move the parallax background per slide
       * - Calculated automatically unless specified
       * - Set to 0 to disable movement along an axis
       */
      parallaxBackgroundVertical: PropTypes.number,
      // Presentation Size
      /**
       * The "normal" size of the presentation, aspect ratio will be preserved
       * when the presentation is scaled to fit different resolutions. Can be
       * specified using percentage units.
       */
      width: PropTypes.number,
      /**
       * The "normal" size of the presentation, aspect ratio will be preserved
       * when the presentation is scaled to fit different resolutions. Can be
       * specified using percentage units.
       */
      height: PropTypes.number,
      /**
       * Factor of the display size that should remain empty around the content
       */
      margin: PropTypes.number,
      /**
       * Bounds for smallest possible scale to apply to content
       */
      minScale: PropTypes.number,
      /**
       * Bounds for largest possible scale to apply to content
       */
      maxScale: PropTypes.number,
      // Dependencies
      dependencies: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * Path to the script to load
           */
          src: PropTypes.string.isRequired,
          /**
           * Flags if the script should load after reveal.js has started, defaults to false
           */
          async: PropTypes.bool,
          /**
           *  Function which must return true for the script to be loaded
           */
          condition: PropTypes.func,
          /**
           * Function to execute when the script has loaded
           */
          callback: PropTypes.func,
        })
      ),
    }),
    /**
     * slides
     */
    slides: PropTypes.arrayOf(
      PropTypes.oneOfType(
        [
          PropTypes.string,
          PropTypes.func,
          PropTypes.arrayOf(
            PropTypes.oneOfType(
              [
                PropTypes.string,
                PropTypes.func,
              ]
            )
          )
        ]
      )
    ),
  };

  static defaultProps = {
    slides: [],
    options: {
      // Configuration
      controls: true,
      progress: true,
      slideNumber: false,
      history: false,
      keyboard: true,
      overview: true,
      center: true,
      touch: true,
      loop: false,
      rtl: false,
      fragments: true,
      embedded: false,
      help: true,
      showNotes: false,
      autoSlide: 0,
      autoSlideStoppable: true,
      mouseWheel: false,
      hideAddressBar: true,
      previewLinks: false,
      transition: 'default',
      transitionSpeed: 'default',
      backgroundTransition: 'default',
      viewDistance: 3,
      parallaxBackgroundImage: '',
      parallaxBackgroundSize: '',
      parallaxBackgroundHorizontal: null,
      parallaxBackgroundVertical: null,
      // Presentation Size
      width: 960,
      height: 700,
      margin: 0.1,
      minScale: 0.2,
      maxScale: 1.5,
      // Dependencies
      dependencies: []
    }
  };

  componentDidMount() {
    const { options } = this.props;
    global.Reveal.initialize(options);
  }

  renderSlides(slides) {
    return slides.map((Slide, key) => {
      if (typeof Slide === "string") {
        return (
          <section key={key} dangerouslySetInnerHTML={{__html: Slide}}/>
        );
      } else if (Array.isArray(Slide)) {
        return (
          <Section key={key}>
            {this.renderSlides(Slide)}
          </Section>
        );
      } else {
        return <Slide key={key}/>;
      }
    });
  }

  render() {
    const { slides } = this.props;

    return (
      <div className="reveal">
        <div className="slides">
          {/* Any section element inside of this container is displayed as a slide */}
          {this.renderSlides(slides)}
        </div>
      </div>
    );
  }
}
