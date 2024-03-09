import { pascalToMMHG } from './pascalToMMHG'

describe('pascalToMMHG', () => {
  it('converts pascal to mmHg', () => {
    expect(pascalToMMHG(0)).toEqual(0)
    expect(pascalToMMHG(133.332)).toBeCloseTo(1, 3)
  })
})
