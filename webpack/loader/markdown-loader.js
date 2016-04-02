import markdown from 'markdown-it';
import loaderUtils from 'loader-utils';

import transformNotes from './markdown/transformNotes';

module.exports = function (source) {
  this.cacheable();

  const loaderOptions = loaderUtils.parseQuery(this.query);

  const options = {
    html: true,
    xhtmlOut: true,
    linkify: true,
    typographer: true,
    langPrefix: '',
    ...loaderOptions
  };


  const plugins = options.use || [];
  delete options.use;

  const parser = markdown(options);

  if (plugins) {
    plugins.forEach(function (plugin) {
      parser.use(plugin);
    });
  }

  const preparsed = transformNotes(source, parser);
  return parser.render(preparsed);
};
