# fastify-expect-ct

[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to set the Expect-CT header

## Why?

You may know [expect-ct](https://github.com/helmetjs/expect-ct) as a [expect-ct middleware](https://helmetjs.github.io/docs/expect-ct/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

Benchmark with no plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 32.37   8.9     1139.09
Req/Sec      30444   1051.31 31048
Bytes/Sec    4.53 MB 170 kB  4.63 MB

609k requests in 20s, 90.7 MB read
```

Benchmark with expect-ct as middleware:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 36.94   8.41    291.93
Req/Sec      26728.8 1666.84 28358
Bytes/Sec    4.58 MB 294 kB  4.85 MB

535k requests in 20s, 91.4 MB read
```

Benchmark with this plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 34.55   8.01    263.7
Req/Sec      28553.6 1073.97 29150
Bytes/Sec    4.84 MB 199 kB  4.98 MB

571k requests in 20s, 97.7 MB read
```

So that's the reason and wish you like it. :)

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

- 0.1.0: Init version

## Todo

- Add test case
- Add ci
- Add benchmark scripts

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
