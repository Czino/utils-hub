import { pascalToAtmosphere } from './pascalToAtmosphere'

describe('pascalToAtmosphere', () => {
  it('converts pascal to atmosphere', () => {
    expect(pascalToAtmosphere(0)).toEqual(0)
    expect(pascalToAtmosphere(100000)).toBeCloseTo(0.987, 3)
  })
})
