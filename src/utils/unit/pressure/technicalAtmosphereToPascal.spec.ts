import { technicalAtmosphereToPascal } from './technicalAtmosphereToPascal'

describe('technicalAtmosphereToPascal', () => {
  it('converts atmosphere to pascal', () => {
    expect(technicalAtmosphereToPascal(0)).toEqual(0)
    expect(technicalAtmosphereToPascal(1)).toEqual(98066.5)
  })
})
