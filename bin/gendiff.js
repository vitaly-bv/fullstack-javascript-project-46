#!/usr/bin/env node

import { program } from 'commander';

// const program = new Command();

program
  .option('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .parse();

const options = program.opts(); 

if (options.help) {
  const textHelp = `Usage: gendiff [options]

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -h, --help           output usage information`;
  console.log(textHelp);
};
