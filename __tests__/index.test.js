import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturesPath(filename), 'utf-8');

const jsonFilepath1 = getFixturesPath('file1.json');
const jsonFilepath2 = getFixturesPath('file2.json');
const ymlFilepath1 = getFixturesPath('file1.yml');
const ymlFilepath2 = getFixturesPath('file2.yml');

const stylishResult = readFile('stylish-result.txt', 'utf-8');
const plainResult = readFile('plain-result.txt', 'utf-8');
const jsonResult = readFile('json-result.txt', 'utf-8');

test('genDiff JSON and YML to json', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'json')).toEqual(jsonResult);
  expect(genDiff(ymlFilepath1, ymlFilepath2, 'json')).toEqual(jsonResult);
});


test('genDiff JSON and YML to stylish', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2)).toEqual(stylishResult);
  expect(genDiff(ymlFilepath1, ymlFilepath2)).toEqual(stylishResult);
});

test('genDiff JSON and YML to plain', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'plain')).toEqual(plainResult);
  expect(genDiff(ymlFilepath1, ymlFilepath2, 'plain')).toEqual(plainResult);
});
