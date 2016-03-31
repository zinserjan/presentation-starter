
export function mapTree(files, fn) {
  return files.map((file) => {
    if (Array.isArray(file)) {
      return mapTree(file, fn)
    }
    return fn(file);
  });
}

export default function buildFileTree(files, depth = 0) {

  const result = [];
  const dirs = {};

  for (const file of files) {
    const paths = file.split('/').splice(depth);
    const path = paths.shift();

    if (paths.length) {
      if (!dirs[path]) {
        dirs[path] = [];
        result.push(dirs[path]);
      }
      dirs[path].push(file);
    } else {
      result.push(file);
    }
  }

  for (const key of Object.keys(dirs)) {
    const dirFiles = dirs[key];
    const filesNew = buildFileTree(dirFiles, depth + 1);
    dirFiles.splice(0, dirFiles.length);
    Array.prototype.push.apply(dirFiles, filesNew);
  }

  return result;
}
