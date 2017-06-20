const between = require('./index.js')

const sleep  = ms => new Promise(res => setTimeout(res, ms))

describe('between()', ()=>{

  test('should be a higher order function.', 
  ()=>{

    const fn = between(100, 1000) 

    expect(typeof fn === 'function').toBe(true)

  })

  test('should return true if target number is between ranges.',
    ()=>{

    const isBetween1And10 = between(1, 10)

    let target = 5

    expect(isBetween1And10(target)).toBe(true)

    target = 10
    
    expect(isBetween1And10(target)).toBe(true)

    target = 1 
    
    expect(isBetween1And10(target)).toBe(true)

    target = 11
    
    expect(isBetween1And10(target)).toBe(false)

    target = 0

    expect(isBetween1And10(target)).toBe(false)

    target = 2.2

    expect(isBetween1And10(target)).toBe(true)

  })

  test('should return true if target alphabet string is between ranges. ', ()=>{

    let target = 'd'

    expect(between('a', 'z')(target)).toBe(true)   

    target = 'a'

    expect(between('a', 'z')(target)).toBe(true)   

    target = 'z'

    expect(between('a', 'z')(target)).toBe(true)   

    target = 'z'

    expect(between('a', 'b')(target)).toBe(false)   

    target = 'c'

    expect(between('a', 'b')(target)).toBe(false)   

    target = 'C'

    expect(between('a', 'b')(target)).toBe(false)   

    target = 'b'

    expect(between('A', 'z')(target)).toBe(true)   

  })


  test('should return true if target Date is between ranges', 
    async ()=>{


    let first = new Date()

    await sleep(200)

    let target = new Date()

    await sleep(200)

    let last = new Date()

    expect(between(first, last)(target)).toBe(true)


  })

  test('should throw error if args are not a valid an alphabet character', ()=>{

      expect(()=>{
        between('#', '/')('%')
      }).toThrow()

  })

  test('should throw error if args are not of the same type', ()=>{

      expect(()=>{
        between(1, 10)('sd')
      }).toThrow()

      expect(()=>{ 
        between(1, '3')(32)
      }).toThrow()

  })

  test('should throw error if args are not number, string or Date', 
    ()=>{

      expect(()=>{
        between(null, null)(null)
      }).toThrow()

      expect(()=>{
        between(undefined, undefined)(undefined)
      }).toThrow()

      expect(()=>{
        between({}, {})({})
      }).toThrow()
  })

})
