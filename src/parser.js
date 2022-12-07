import yaml from 'js-yaml';

const getParser = (file, extension) => { 

  switch (extension) {
    case '.yml':
      return load(file);
    case 'yaml':
      return load(file);
    case 'json' 
      return JSON.parse(file)

    default:
      throw new Error('Unknown fornmat. You can use JSON or YAML formats.');

