import { shuffle } from './shuffle'

describe('shuffle', () => {
  it('should shuffle array', () => {
    const flatArray = [1, 1, 2, 1, 3, 4, 6, 7, 5, 4, 3, 2, 5, 3, 5, 6, 3, 6]
    expect(flatArray.toSorted(shuffle)).not.toEqual(flatArray)
  })
})
