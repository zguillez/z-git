#! /usr/local/bin/node
const zgit = require('./index');
const argv = require('minimist')(process.argv.slice(2));
if (argv.push) {
  if (argv.main) {
    zgit.push('main', argv.push);
  } else {
    zgit.push('master', argv.push);
  }
}
