import { psiToPascal } from './psiToPascal'

describe('psiToPascal', () => {
  it('converts atmosphere to pascal', () => {
    expect(psiToPascal(0)).toEqual(0)
    expect(psiToPascal(1)).toEqual(6894.76)
  })
})
