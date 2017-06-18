# in-between [![Build Status](https://travis-ci.org/alvarobernalg/in-between.svg?branch=master)](https://travis-ci.org/alvarobernalg/in-between)

> Test whether a number is between 2 other numbers. 


## Install

```
$ npm install in-between
```


## Usage

```js
const between = require('in-between')

const between1and10 = between(1, 10)

between1and10(10) => true

between1and10(-1) => false

between1and10(1) => true

between(100, 200)(10) => false

```

## License

MIT © Alvaro Bernal