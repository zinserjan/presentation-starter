const regex = /note:\s*\n/gmi;

export default function transformNotes(source, parser) {

  const parts = source.split(regex);
  const partsLength = parts.length;


  if (partsLength > 1) {
    let marked = '';
    for (let i = 1; i < partsLength; i++) {
      const part = parts[i];
      marked += parser.render(part);
    }
    return [parts[0], `<aside class="notes">${marked}</aside>`].join('');
  }
  // no notes, just return source
  return source;
}
