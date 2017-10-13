const stringifyObject = (object, indentations = 0) => {
  if (
    object === null ||
    ['number', 'function', 'undefined', 'boolean'].indexOf(typeof object) > -1
  ) {
    return '' + object;
  } else if ('string' === typeof object) {
    return '"' + object + '"';
  } else if (object instanceof Array) {
    return `[${object.map((value) => stringifyObject(value, indentations + 1)).join(', ')}\n${'  '.repeat(indentations)}]`;
  } else {
    let str = '\n' + '  '.repeat(indentations) + '{';

    indentations += 1;

    for (let key in object) {
      const value = object[key];

      str += '\n';
      str += '  '.repeat(indentations);

      str += `${key}: ${stringifyObject(value, indentations)},`;
    }

    indentations -= 1;

    str += '\n';
    str += '  '.repeat(indentations);
    str += '}';

    return str;
  }
}

export default stringifyObject;
