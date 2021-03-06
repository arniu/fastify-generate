# Generate [fastify](https://www.npmjs.com/package/fastify) applications fastly

[![NPM](https://img.shields.io/npm/v/fastify-generate.svg)](https://www.npmjs.com/package/fastify-generate)
[![Build](https://travis-ci.org/arniu/fastify-generate.svg)](https://travis-ci.org/arniu/fastify-generate)
[![Standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Greenkeeper](https://badges.greenkeeper.io/arniu/fastify-generate.svg)](https://greenkeeper.io/)

## Installation

```sh
npm install -g fastify-generate
```

## Quick Start

The quickest way to get started with fastify is to utilize the executable `fastify(1)` to generate an application as shown below:

Create the app:

```sh
fastify path/to/app && cd path/to/app
```

Install dependencies:

```sh
npm install
```

Start the app at `http://localhost:3030/`:

```sh
npm start
```

## Examples

1. Create a fastify app:

```sh
fastify path/to/app
```

2. Create a fastify plugin:

```sh
fastify -P path/to/plugin
```

3. Add more option for creating the app:

```sh
fastify -F v1.0 -p 3030 path/to/app
```

## Command Line Options

```
Options:
    -h, --help          output usage information
    -v, --version       output the version number

For Generating:
    -P, --plugin        generate a fastify plugin
    -F, --fastify       specify fastify version
    -p, --port          specify the port to use
```

## License

[MIT](LICENSE)
