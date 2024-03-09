import { torrToPascal } from './torrToPascal'

describe('torrToPascal', () => {
  it('converts atmosphere to pascal', () => {
    expect(torrToPascal(0)).toEqual(0)
    expect(torrToPascal(1)).toEqual(133.322)
  })
})
