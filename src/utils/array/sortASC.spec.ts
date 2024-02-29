import { sortASC } from './sortASC'

describe('sortASC', () => {
  it('should sort array in ascending order', () => {
    const flatArray = [1, 1, 2, 1, 3, 4]
    const flatArrayAlpha = ['a', 'a', 'b', 'a', 'c', 'd']
    expect(flatArray.toSorted(sortASC)).toEqual([1, 1, 1, 2, 3, 4])
    expect(flatArrayAlpha.toSorted(sortASC)).toEqual(['a', 'a', 'a', 'b', 'c', 'd'])
  })
})
