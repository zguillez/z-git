#! /usr/local/bin/node
const zgit = require('./index');
const argv = require('minimist')(process.argv.slice(2));
if (argv.u || argv.update) {
  if (argv.major) {
    zgit.update('major');
  } else if (argv.minor) {
    zgit.update('minor');
  } else {
    zgit.update();
  }
}
