const between = (start, end)=> target => {
  
  if (typeof end !== 'number' || typeof start !== 'number' || typeof target !== 'number') {
    throw new TypeError()
  }

  return (target >= start && target <= end)

}

module.exports = between
