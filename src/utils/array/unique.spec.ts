import { unique } from './unique'

describe('unique', () => {
  it('filters array items by unique values', () => {
    const flatArray = [1, 1, 2, 1, 3, 4]
    const flatArrayAlpha = ['a', 'a', 'b', 'a', 'c', 'd']
    expect(flatArray.filter(unique)).toEqual([1, 2, 3, 4])
    expect(flatArrayAlpha.filter(unique)).toEqual(['a', 'b', 'c', 'd'])
  })
})
