import { atmosphereToPascal } from './atmosphereToPascal'

describe('atmosphereToPascal', () => {
  it('converts atmosphere to pascal', () => {
    expect(atmosphereToPascal(0)).toEqual(0)
    expect(atmosphereToPascal(1)).toEqual(101325)
  })
})
