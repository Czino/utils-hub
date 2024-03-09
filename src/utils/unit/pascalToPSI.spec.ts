import { pascalToPSI } from './pascalToPSI'

describe('pascalToPSI', () => {
  it('converts pascal to PSI', () => {
    expect(pascalToPSI(0)).toEqual(0)
    expect(pascalToPSI(100000)).toBeCloseTo(14.504, 3)
  })
})
