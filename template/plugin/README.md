# __packageName__

[![Standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

Short description of your awesome plugin.

## Install

```
npm install __packageName__
yarn add __packageName__
```

## Example

```js
const app = require('fastify')()
app.register(require('__packageName__'))

app.listen(3030)
```

## Plugin

### Accessibility

Is your plugin fully encapsulated? If you use `fastify-plugin` or the hidden property `'skip-override'` it's not.

**accessibilityTemplate**

### Decorators

#### Fastify

**fastifyDecorators**

#### Reply

**replyDecorators**

## Dependencies

**pluginDeps**

## Compatible Fastify version

fastify: __fastify__

## Why not `async/await`?

According to [Node Green](https://node.green/), async function is avaiable on
Node >= v7.10.1. And fastify supports Node >= 6, we'd better use callbacks to
cover more useage scenario.
