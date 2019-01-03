# **packageName**

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

You can also start the plugin with the [Fastify-cli](https://github.com/fastify/fastify-cli):

```
fastify start __pluginFileName__
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

**minFastify**
