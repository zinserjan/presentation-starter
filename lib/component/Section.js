import React, { Component, PropTypes } from 'react';

const transitionValues = ['none', 'fade', 'slide', 'convex', 'concave', 'zoom'];

export default class Section extends Component {

  static propTypes = {
    /**
     * children
     */
    children: PropTypes.node,
    /**
     * override the global slide duration for this slide and fragments
     * pass 0 to disable it for this slide
     */
    autoSlide: PropTypes.number,
    /**
     * apply full page backgrounds outside of the slide area by adding a data-background
     * Supported Values: color, image
     * example: #ff0000
     * example: http://example.com/image.png
     */
    background: PropTypes.string,
    /**
     * Size of the background image
     * see: https://developer.mozilla.org/de/docs/Web/CSS/background-size
     */
    backgroundSize: PropTypes.string,
    /**
     * repeat the background
     * see https://developer.mozilla.org/de/docs/Web/CSS/background-repeat
     */
    backgroundRepeat: PropTypes.oneOf(['no-repeat', 'repeat', 'repeat-x', 'repeat-y', 'inherit']),
    /**
     * Video. Multiple sources can be defined using a comma separated list.
     * example: https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4,https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.webm
     */
    backgroundVideo: PropTypes.string,
    /**
     * Video will loop
     */
    backgroundVideoLoop: PropTypes.bool,
    /**
     * Embeds a web page as a background. Note that the page won't be interactive.
     * example: https://slides.com
     */
    backgroundIframe: PropTypes.string,
    /**
     * Overrides the global background transition for this slide.
     */
    backgroundTransition: PropTypes.oneOf(transitionValues),
    /**
     * Overrides the global transition for this slide.
     */
    transition: PropTypes.oneOf(transitionValues),
    /**
     * Overrides the global transition speed for this slide.
     */
    transitionSpeed: PropTypes.oneOf(['default', 'fast', 'slow']),
  };

  render() {
    const { children, autoSlide, background, backgroundSize, backgroundRepeat, backgroundVideo, backgroundVideoLoop, backgroundIframe, backgroundTransition, transition, transitionSpeed, ...props } = this.props;

    if (typeof autoSlide !== "undefined") {
      props['data-autoslide'] = autoSlide;
    }

    if (background) {
      props['data-background'] = background;

      if (backgroundSize) {
        props['data-background-size'] = backgroundSize;
      }

      if (backgroundRepeat) {
        props['data-background-repeat'] = backgroundRepeat;
      }

    } else if (backgroundVideo) {
      props['data-background-video'] = backgroundVideo;

      if (typeof backgroundVideoLoop !== "undefined") {
        props['data-background-video-loop'] = backgroundVideoLoop;
      }
      // todo background size also for videos?

    } else if (backgroundIframe) {
      props['data-background-iframe'] = backgroundIframe;
      // todo background size also for iframes?
    }

    if (backgroundTransition) {
      props['data-background-transition'] = backgroundTransition;
    }

    if (transition) {
      props['data-transition'] = transition;
    }

    if (transitionSpeed) {
      props['data-transition-speed'] = transitionSpeed;
    }

    return (
      <section {...props}>
        {children}
      </section>
    );
  }
}
