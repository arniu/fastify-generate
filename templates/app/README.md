# __packageName__

[![Standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

Short description of your awesome app.

## Install

```
npm install __packageName__ --save
yarn add __packageName__
```

## Example

```js
const fastify = require('fastify')()
fastify.register(require('__packageName__'))
fastify.listen(3000)
```

You can also start any Fastify plugin with the [Fastify-cli](https://github.com/fastify/fastify-cli):

```
fastify start __pluginFileName__
```

## Plugin

### Accessibility

<!-- Is your plugin fully encapsulated? If you use fastify-plugin or the hidden property 'skip-override' it's not -->

**accessibilityTemplate**

### Decorators

<!-- A list of all exposed decorators in your plugin -->

#### Fastify

<!-- Please define the method signature in typescript because it's well known and easy to write -->

**fastifyDecorators**

#### Reply

<!-- Please define the method signature in typescript because it's well known and easy to write -->

**replyDecorators**

## Dependencies

**pluginDeps**

## Compatible Fastify version

**minFastify**
