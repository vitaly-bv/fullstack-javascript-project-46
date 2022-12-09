import fs from 'fs';
import path from 'path';
// import diffTree from
import getParse from './parser.js';
import chooseFormat from './formatters/index.js';

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath); // trim();
const getFileFormat = (filepath) => path.extname(filepath); // .slice(1)
const readFile = (filepath) => fs.readFileSync(getFilePath(filepath), 'utf-8');

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const dataFilepath1 = readFile(filepath1);
  const dataFilepath2 = readFile(filepath2);
  const parsedFile1 = getParse(dataFilepath1, getFileFormat(filepath1));
  const parsedFile2 = getParse(dataFilepath2, getFileFormat(filepath2));
  const diff = diffTree(parsedFile1, parsedFile2);
  return getFormat(diff, format);
};

export default genDiff;
