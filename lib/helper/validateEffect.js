import { PropTypes } from 'react';


export default function validateEffect(allowedEffects) {

  return (props, propName, componentName) => {
    let error = PropTypes.string(props, propName, componentName);
    if (!error) {
      const value = props[propName];
      if (value) {
        const effects = value.split(' ');
        const invalid = [];

        for (const effect of effects) {
          if (allowedEffects.indexOf(effect.trim()) === -1) {
            invalid.push(effect);
          }
        }

        if (invalid.length) {
          error = new Error(`Provided effect "${value}" contains invalid effect: ${invalid.map((value) => `"${value}"`).join(', ')}`);
        }

      }
    }
    return error;
  };
}
