import ReactDOMServer from 'react-dom/server';
import React from 'react';


function Html(props) {
  const { title } = props;
  return (
    <html>
    <head>
      <meta charSet="UTF-8"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"/>

      <title>{title}</title>
    </head>
    <body>
    <div id="reveal" style={{width: '100%', height: '100%'}}></div>
    </body>
    </html>

  );
}

module.exports = function (templateParams) {
  const title = templateParams.htmlWebpackPlugin.options.title;

  const html = ReactDOMServer.renderToStaticMarkup(<Html title={title}/>);

  return `<!DOCTYPE html>${html}`;
};
