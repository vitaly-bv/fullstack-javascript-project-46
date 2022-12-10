import { load } from 'js-yaml'; // import yaml ???

const getParser = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return load(data);
    case 'yml':
      return load(data);
    default:
      return Error('Unknown format. You can use only JSON or YAML formats.');
  }
};

export default getParser;
