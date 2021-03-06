# z-git

[![npm version](https://badge.fury.io/js/z-git.svg)](https://badge.fury.io/js/z-git)
[![Build Status](https://travis-ci.org/zguillez/z-git.svg?branch=master)](https://travis-ci.org/zguillez/z-git)
[![Installs](https://img.shields.io/npm/dt/z-git.svg)](https://coveralls.io/r/zguillez/z-git)
[![Gitter](https://badges.gitter.im/zguillez/z-git.svg)](https://gitter.im/zguillez/z-git?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

## Tools for git repositories

# Getting Started

## Install

```
npm i @zguillez/z-git --save-dev
yarn add @zguillez/z-git --dev
```

# Usage

```
const zgit = require('z-git');
```

# CLI Usage

```
"scripts": {
    "test": "zgit"
  }
```

## Push changes to repository

```
zgit.push('main', 'minor fixes');
```

```
zgit --master --push 'minor fixes'
zgit --main --push 'minor fixes'
```

# Contributing and issues

Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License

©2021 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog

### v0.1.0 (August 19, 2021)

* Initial commit
