# in-between 

> Test whether a number, alphabet character or a date is between 2 others. 

[![Build Status](https://travis-ci.org/AlvaroBernalG/in-between.svg?branch=master)](https://travis-ci.org/AlvaroBernalG/in-between) [![npm version](https://badge.fury.io/js/in-between.svg)](https://badge.fury.io/js/in-between)

Augmented version of [in-range](https://github.com/sindresorhus/in-range) made by [Sindre Sorhus](https://sindresorhus.com) with a more functional taste. 

## Install
```
$ npm install in-between
```


## Usage

With numbers: 

```js
const between = require('in-between')

const between1and10 = between(1, 10)

between1and10(10) //=> true

between1and10(-1) //=> false

betweenAandZ('*') //=> throws error

between1and10(1) //=> true

between(100, 200)(10) //=> false

```

Works with alphabet characters: 

```js

const between = require('in-between')

const betweenAandZ = between('a', 'd')

betweenAandZ('b') //=> true

betweenAandZ('z') //=> false

```

Works with Dates as well:

```js

const between = require('in-between')

let myGraduation = new Date("October 13, 2014 11:13:00")

let myFirstJob =  new Date("September 1, 2015 11:13:00")

let myBirthDay =  new Date("January 10, 2015 10:11:03")

between(myGraduation, myFirstJob)(myBirthDay) //=> true

```


## License

MIT © [Alvaro Bernal](https://github.com/AlvaroBernalG/) 