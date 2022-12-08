import _ from 'lodash';

const makeIndent = (depth, replacer = ' ', spaceCount = 4) => replacer.repeat(depth * spacesCount - 2);
// или '  '.repeat(depth * 2 - 1) ???  

const makeString = (data, stylish, depth = 1) => { 
  if (!_.isObject(data)) {
    return data;
  }
  const keys = Object.keys(data); 
  const result = keys.map((name) =>
    const value = data[name]
    return stylish({ value, name, type: 'unchanged' }, depth + 1);
  });

const makeStylish = 

export default makeStylish;


