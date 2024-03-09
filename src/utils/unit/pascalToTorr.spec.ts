import { pascalToTorr } from './pascalToTorr'

describe('pascalToTorr', () => {
  it('converts pascal to torr', () => {
    expect(pascalToTorr(0)).toEqual(0)
    expect(pascalToTorr(133.332)).toBeCloseTo(1, 3)
  })
})
