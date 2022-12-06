#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import genDiff from '../src/genDiff.js';

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
//  .arguments('<filepath1> <filepath2>')
  .argument('<filepath1>', 'path to file1')
  .argument('<filepath2>', 'path to file2')
  .action((filepath1, filepath2) => {
    // const absoluteFile = path.resolve(filepath1);

    //    console.log(genDiff(absoluteFile, 'utf8'))
    //    console.log(genDiff(filepath1, 'utf8'))
    //    });
    const result = genDiff(
      path.resolve(process.cwd(), filepath1),
      path.resolve(process.cwd(), filepath2),
    );
    console.log(result);
  });

program.parse();
