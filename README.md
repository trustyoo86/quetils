# qutils
Utility for URL query string

## Usage
```bash
npm i quetils

yarn add quetils
```

```javascript
const quetils = require('quetils');

const url = 'localhost:8080?test=1&test2=2';
quetils(url); // ouput: { test: 1, test2: 2}
```