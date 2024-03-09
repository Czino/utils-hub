import { pascalToPSF } from './pascalToPSF'

describe('pascalToPSF', () => {
  it('converts pascal to atmosphere', () => {
    expect(pascalToPSF(0)).toEqual(0)
    expect(pascalToPSF(100000)).toBeCloseTo(2088.542, 3)
  })
})
