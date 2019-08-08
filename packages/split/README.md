# `@quetils/split`

Split query string return `array`

## Install

```bash
# npm
npm i @quetils/split

# yarn
yarn add @quetils/split
```

## Usage

```javascript
const split = require('@quetils/split');

const url = 'localhost:8080/test?test1=1&test2=2';
split(url); // ['test1=1', 'test2=2']

```
