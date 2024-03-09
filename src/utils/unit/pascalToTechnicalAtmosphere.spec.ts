import { pascalToTechnicalAtmosphere } from './pascalToTechnicalAtmosphere'

describe('pascalToTechnicalAtmosphere', () => {
  it('converts pascal to atmosphere', () => {
    expect(pascalToTechnicalAtmosphere(0)).toEqual(0)
    expect(pascalToTechnicalAtmosphere(100000)).toBeCloseTo(1.0197, 3)
  })
})
