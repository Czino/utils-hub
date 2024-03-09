import { barToPascal } from './barToPascal'

describe('barToPascal', () => {
  it('converts atmosphere to pascal', () => {
    expect(barToPascal(0)).toEqual(0)
    expect(barToPascal(1)).toEqual(100000)
  })
})
