'use strict';
require('colors');
const shell = require('shelljs');

/**
 *
 * Class Zgit
 */
class Zgit {
  /**
   * Push to repository
   */
  push(message) {
    shell.exec(`git add --all`);
    shell.exec(`git commit -m ${message}`);
    shell.exec(`git push origin main`);
  }
}

/**
 *
 * @type {Zgit}
 */
module.exports = new Zgit();
