# __packageName__

[![Standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

Short description of your awesome app.

## Developing

When developing, reload automatically:

```sh
npm install
npm run dev
```

Under the hood, [nodemon](https://www.npmjs.com/package/nodemon) is watching
and will restart the app when any file changed.

## Start

Install dependencies and start the app:

```sh
npm install
npm start
```

## `async/await` or callback?

According to [Node Green](https://node.green/), async function is avaiable on
Node >= v7.10.1. If your app will run on node v6, DO NOT use async/await.
