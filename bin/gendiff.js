#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program

  .version('0.0.1', '-V, --version', 'output the version number')

  .description('Compares two configuration files and shows a difference.');

  .option('-f, --format [type]', 'output format', 'stylish');

  .arguments('<filepath1> <filepath2>');

  .action

program.parse();
