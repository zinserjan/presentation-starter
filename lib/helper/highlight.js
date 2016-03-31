import hljs from 'highlight.js/lib/highlight.js';

import path from 'path';

const languages = {};
const languageContext = require.context('highlight.js/lib/languages', false, /js$/);

languageContext.keys().forEach((key) => {
  const language = path.basename(key, '.js');

  languages[language] = language;
  const hljsLang = languageContext(key)(hljs);

  if (hljsLang.aliases) {
    hljsLang.aliases.forEach((lang) => {
      languages[lang] = language;
    });
  }
});


const registeredLanguages = {};

function registerLanguage(language) {
  if (!registeredLanguages[language] && languages[language]) {
    const module = languages[language];
    registeredLanguages[module] = true;
    const hljsLang = require(`highlight.js/lib/languages/${module}`);
    hljs.registerLanguage(module, hljsLang);
  }
}

export function highlightBlock(language, el) {
  registerLanguage(language);
  hljs.highlightBlock(el);
}

export const supportedLanguages = Object.keys(languages).sort();
