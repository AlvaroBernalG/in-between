# in-between 

> Test whether a number or an alphabet character is between 2 others. 

[![Build Status](https://travis-ci.org/AlvaroBernalG/in-between.svg?branch=master)](https://travis-ci.org/AlvaroBernalG/in-between)

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

betweenAandZ('*') //=> false

between1and10(1) //=> true

between(100, 200)(10) //=> false

```

## License

MIT © [Alvaro Bernal](https://github.com/AlvaroBernalG/) 