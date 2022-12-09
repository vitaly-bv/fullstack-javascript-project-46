import _ from 'lodash';

const makeIndent = (depth, replacer = ' ', spaceCount = 4) => replacer.repeat(depth * spacesCount - 2);
// или '  '.repeat(depth * 2 - 1) ???  

// stringify преобразуем js в json строку
const makeString = (data, stylish, depth = 1) => { 
  if (!_.isObject(data)) {
    return data;
  }
  const keys = Object.keys(data); 
  const result = keys.map((name) => {
    const value = data[name];
    return stylish({ value, name, type: 'unchanged' }, depth + 1);
  });
  return `{\n${result.join('\n')}\n  ${makeIndent(depth)}}`;
};

const makeStylish = (diff, depth = 0) => {
  const {
    name, value, type, value1, value2, children,
  } = diff; // не совсем пойму пока

  switch (type) {
    case 'root': {
      const resultLine = children.flatMap((child) => makeStylish(child, depth + 1));
      return `{\n${resultLine.join('\n')}\n}`;
    }
    case 'nested': {
      const resultLine = children.flatMap((child) => makeStylish(child, depth + 1));
      return `${makeIndent(depth)}  ${name}: {\n${resultLine.join('\n')}\n${makeIndent(depth)}  }`;
    }
    case 'added':
      return `${makeIndent(depth)}+ ${name}: ${makeString(value, stylish, depth)}`;
    case 'deleted':
      return `${makeIndent(depth)}- ${name}: ${makeString(value, stylish, depth)}`;
    case 'unchanged':
      return `${makeIndent(depth)}  ${name}: ${makeString(value, stylish, depth)}`;
    case 'changed': {
      const removed = `${makeIndent(depth)}- ${name}: ${makeString(value1, stylish, depth)}`;
      const added = `${makeIndent(depth)}+ ${name}: ${makeString(value2, stylish, depth)}`;
      return `${removed}\n${added}`;
    }
    default:
      throw new Error(`Type: ${type} is undefined`);
  }
};


export default makeStylish;


