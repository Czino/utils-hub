import { sortDESC } from './sortDESC'

describe('sortDESC', () => {
  it('should sort array in descending order', () => {
    const flatArray = [1, 1, 2, 1, 3, 4]
    const flatArrayAlpha = ['a', 'a', 'b', 'a', 'c', 'd']
    expect(flatArray.toSorted(sortDESC)).toEqual([4, 3, 2, 1, 1, 1])
    expect(flatArrayAlpha.toSorted(sortDESC)).toEqual(['d', 'c', 'b', 'a', 'a', 'a'])
  })
})
