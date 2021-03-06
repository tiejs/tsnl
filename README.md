# tsnl

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tsnl.svg)](https://npmjs.org/package/tsnl)
[![Downloads/week](https://img.shields.io/npm/dw/tsnl.svg)](https://npmjs.org/package/tsnl)
[![License](https://img.shields.io/npm/l/tsnl.svg)](https://github.com/forsigner/tsnl/blob/master/package.json)

Create { TypeScript Node.js library } with zero-config CLI.

<!-- toc -->

- [Quick Start](#quick-start)
- [Commands](#commands)
  <!-- tocstop -->

## Quick Start

<!-- quick-start -->

```sh-session
npx tsnl new mylib
cd mylib
npm run dev
```

<!-- quick-startstop -->

## Commands

<!-- commands -->

- [`tsnl new [LIBNAME]`](#tsnl-new-libname)
- [`tsnl dev`](#tsnl-dev)
- [`tsnl build`](#tsnl-build)
- [`tsnl test`](#tsnl-test)
- [`tsnl lint`](#tsnl-lint)

### `tsnl new [LIBNAME]`

Init a library project.

### `tsnl dev`

Run the project in development mode.

### `tsnl build`

Build the project to dist for production.

### `tsnl lint`

Lint code with eslint.

#### params

- `tsnl lint --fix`

### `tsnl test`

Run unitest with jest.

#### params

- `tsnl test --watch`
- `tsnl test --coverage`


