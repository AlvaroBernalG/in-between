# in-between 

> Test whether a number, alphabet character or a date is between 2 others. 

[![Build Status](https://travis-ci.org/AlvaroBernalG/in-between.svg?branch=master)](https://travis-ci.org/AlvaroBernalG/in-between) [![npm version](https://badge.fury.io/js/in-between.svg)](https://badge.fury.io/js/in-between)

Augmented version of [in-range](https://github.com/sindresorhus/in-range) made by [Sindre Sorhus](https://sindresorhus.com) with a more functional taste. 

## Install
```
$ npm install in-between
```


## Usage

```js
const between = require('in-between')

const between1and10 = between(1, 10)

const betweenAandZ = between('a', 'z')

between1and10(10) //=> true

betweenAandZ('b') //=> true

between1and10(-1) //=> false

betweenAandZ('*') //=> throws error

between1and10(1) //=> true

between(100, 200)(10) //=> false

```

Works with Dates as well

```js

let first = new Date()

let target =  new Date()

let last =  new Date()

between(first, last)(middle) //=> true

```


## License

MIT © [Alvaro Bernal](https://github.com/AlvaroBernalG/) 