import { readFileSync } from 'fs';
// import fs from 'fs';
// import _ from 'lodash';
import path from 'path';

// const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
// const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
// const getFormat = (filename) => filename.split('.')[1];

// const genDiff = (filepath1, filepath2, nameOfFormat = 'stylish') => {
//  const content1 = readFile(filepath1);
//   const content2 = readFile(filepath2);
// };

const operators = { minus: '-', plus: '+' };

const genDiff = (filepath1, filepath2) => {
  const absoluteFile = path.resolve(filepath1);
  console.log(readFileSync(absoluteFile, 'utf8'));
  console.log(readFileSync(filepath1, 'utf8'));
  console.log(readFileSync(filepath2, 'utf8'));
};

export default genDiff;