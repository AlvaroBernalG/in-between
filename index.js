const some = (...validation) => (target) => {
  return validation.reduce((prev, next) => prev || next(target), validation[0](target))
}

const is = {
  alphabet: (target) => !!target.match('^[a-zA-Z]$'),

  number: (target) => typeof target === 'number',

  date: (target) => target instanceof Date,
  
  sameType: (args)=>{
    let s = typeof args[0]
    return args.every(arg => typeof arg === s)
  }
}

const inRange = (start, end, target) => target > start && target < end

const range = (start, end, target) => target >= start && target <= end

const between = (start, end, boundaries) => (target) => {
  const args = [start, end, target]

  const valid = some(is.date, is.number, is.alphabet)

  if (args.every(valid) && is.sameType(args)) {
    return boundaries ? range(start, end, target) : inRange(start, end, target)
  }

  throw new TypeError()
}

module.exports = between
