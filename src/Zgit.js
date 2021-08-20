'use strict';
const shell = require('shelljs');

/**
 *
 * Class Zgit
 */
class Zgit {
  /**
   * Push to repository
   */
  push(branch, message) {
    /* istanbul ignore next */
    shell.exec(`git add --all`);
    /* istanbul ignore next */
    shell.exec(`git commit -m "${message}"`);
    /* istanbul ignore next */
    shell.exec(`git push origin ${branch}`);
  }
}

/**
 *
 * @type {Zgit}
 */
module.exports = new Zgit();
