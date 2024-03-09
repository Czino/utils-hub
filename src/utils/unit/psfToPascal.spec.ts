import { psfToPascal } from './psfToPascal'

describe('psfToPascal', () => {
  it('converts atmosphere to pascal', () => {
    expect(psfToPascal(0)).toEqual(0)
    expect(psfToPascal(1)).toEqual(47.8803)
  })
})
