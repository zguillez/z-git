#! /usr/bin/env node
/* eslint no-unused-vars: "off", no-restricted-modules: "off" */
const colors = require('colors');
const shell = require('shelljs');
const zversion = require('@zguillez/z-version');
// -----------------------------------
zversion.update();
shell.exec(`git add --all`);
shell.exec(`git commit -m update`);
shell.exec(`git push origin main`);
console.log(`=> Done!\n`.green);
