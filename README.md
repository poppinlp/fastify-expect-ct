# fastify-expect-ct

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to set the Expect-CT header

## Why?

You may know [expect-ct](https://github.com/helmetjs/expect-ct) as a [expect-ct middleware](https://helmetjs.github.io/docs/expect-ct/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

You may find the reason in [benchmark result](./benchmarks/benchmark.txt) and wish you like it. :)

## Install

Via npm:

```shell
npm i fastify-expect-ct
```

Via yarn:

```shell
yarn add fastify-expect-ct
```

## Usage

```js
const fastify = require('fastify');
const fastifyExpectCt = require('fastify-expect-ct');

const app = fastify();
app.register(fastifyExpectCt, {
  // Your options
});

app.listen(3000, err => {
  if (err) throw err;
});
```

## Options

This plugin has the same options as the middleware in helmet.

### maxAge {number}

Set `max-age` in header. Default is `0`. Plugin will use default value if you passed in a non-numeric value.

### enforce {boolean}

Set `enforce` value in header. Default is `false`.

### reportUri {string}

Set `reportUri` value in header. Default is empty.

## Changelog

- 0.2.0
  - Add test case
  - Add code coverage
  - Add benchmarks
- 0.1.0:
  - Init version

[ci-img]: https://img.shields.io/travis/poppinlp/fastify-expect-ct.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/fastify-expect-ct
[cov-img]: https://img.shields.io/coveralls/poppinlp/fastify-expect-ct.svg?style=flat-square
[cov-url]: https://coveralls.io/github/poppinlp/fastify-expect-ct?branch=master
[lint-img]: https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square
[lint-url]: https://github.com/poppinlp/eslint-config-handsome
[dep-img]: https://img.shields.io/david/poppinlp/fastify-expect-ct.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/fastify-expect-ct
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/fastify-expect-ct.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/fastify-expect-ct#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/fastify-expect-ct.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/fastify-expect-ct.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/fastify-expect-ct.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/fastify-expect-ct
