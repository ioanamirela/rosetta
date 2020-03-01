const rosettaStone = require('../src/index')

describe("rosetta stone", () => {
  it("should output ['b', 'a', 'c'] for input: ['bca','aaa','acb']", () => {
     expect(rosettaStone(['bca','aaa','acb'])).toEqual(['b', 'a', 'c'])
  })

  it("should output ['q', 'w', 'e', 'r', 't', 'y'] for input: ['qer','qet','we','wrr','etrr', 'ey']", () => {
    expect(rosettaStone(['qer','qet','we','wrr','etrr', 'ey'])).toEqual(['q', 'w', 'e', 'r', 't', 'y'])
  })

  it("should output ['a','b'] for input: ['a','b']", () => {
    expect(rosettaStone(['aa','bb'])).toEqual(['a','b'])
  })

  it("should output empty array when no solution is found (cycle): ['aa','bb', 'aa']", () => {
    expect(rosettaStone(['aa','bb','aa'])).toEqual([])
  })

  it("should output ['a', 'b', 'c'] for input: : ['bba','bbb', 'bbc']", () => {
    expect(rosettaStone(['bba','bbb', 'bbc'])).toEqual(['a', 'b', 'c'])
  })
})