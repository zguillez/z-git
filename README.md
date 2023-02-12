# z-git

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

## Tools for git repositories

# Getting Started

## Install

```
npm i @zguillez/z-git
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

Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:guillermo@delaiglesia.email).

# License

©2023 Zguillez.IO

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog

### v0.1.32 (February 12, 2023)

* Update dependencies

### v0.1.0 (August 19, 2021)

* Initial commit
