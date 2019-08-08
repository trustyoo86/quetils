# `@quetils/make`

Make query string to object

## Install

```bash
# npm
npm i @quetils/make

# yarn
yarn add @quetils/make
```

## Usage

```javascript
const make = require('@quetils/make');

const url = 'localhost:8080/test?test1=1&test2=2';
console.log(make(url)); // { test1: 1, test2: 2 }
```
