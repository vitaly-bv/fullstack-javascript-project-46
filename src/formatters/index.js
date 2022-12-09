import makeStylish from './stylish.js';
import plain from './plain.js';

const chooseFormat = (data, format) => {
  switch (format) {
    case 'makeStylish':
      return makeStylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default chooseFormat;
