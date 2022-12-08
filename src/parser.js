import yaml from 'js-yaml';

const getParser = (data, format) => {
  switch (format) {
    case '.yml':
      return load(data);
    case 'yaml':
      return load(data);
    case 'json'
      return JSON.parse(data);
    default:
      throw new Error('Unknown format. You can use only JSON or YAML formats.');
  }
};

export default getParser;
