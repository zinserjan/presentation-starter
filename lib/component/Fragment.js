import React, { Component, PropTypes } from 'react';
import validateEffect from '../helper/validateEffect';

export default class Fragment extends Component {

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
     * used html element tag
     */
    tag: PropTypes.string,
    /**
     * controls the display order of fragments
     */
    index: PropTypes.number,
    /**
     * changes the default style to the desired
     * default fragment style is to start out invisible and fade in.
     */
    effect: PropTypes.any
    //   validateEffect(
    //   [
    //     'grow',
    //     'shrink',
    //     'fade-in',
    //     'fade-out',
    //     'current-visible',
    //     'highlight-current-blue',
    //     'highlight-red',
    //     'highlight-current-red',
    //     'highlight-green',
    //     'highlight-current-green',
    //     'highlight-blue',
    //     'highlight-current-blue',
    //   ]
    // )
  };

  static defaultProps = {
    tag: 'p'
  };

  render() {
    const { children, className, effect, autoSlide, tag: Tag, index, ...props } = this.props;

    const cName = [className, 'fragment', effect].filter(Boolean).join(' ');

    if (typeof autoSlide !== "undefined") {
      props['data-autoslide'] = autoSlide;
    }

    if (typeof index !== "undefined") {
      props['data-fragment-index'] = index;
    }

    return (
      <Tag {...props} className={cName}>
        {children}
      </Tag>
    );
  }
}
