import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
// файл = стрелочную функцию гнде path объединяем все через dirname
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const filepath1 = getFixturesPath('file1.json');
const filepath2 = getFixturesPath('file2.json');
// const filepath3 = getFixturesPath('file1.yaml');
// const filepath4 = getFixturesPath('file1.yaml');

/// const stylish ///

// удалить перенос строки с помощью trim() обрезав лишние пробелы
// после получения содержимого фикстур
