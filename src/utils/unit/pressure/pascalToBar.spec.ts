import { pascalToBar } from './pascalToBar'

describe('pascalToBar', () => {
  it('converts pascal to bar', () => {
    expect(pascalToBar(0)).toEqual(0)
    expect(pascalToBar(100000)).toBeCloseTo(1, 3)
  })
})
