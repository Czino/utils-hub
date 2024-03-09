import { ABSOLUTE_ZERO_ºC } from './constants'
import { leidenToKelvin } from './leidenToKelvin'

describe('leidenToKelvin', () => {
  it('should convert leiden to kelvin', () => {
    expect(leidenToKelvin(-20.15)).toBe(0)
    expect(leidenToKelvin(253)).toBeCloseTo(-ABSOLUTE_ZERO_ºC, 1)
    expect(leidenToKelvin(352.9839)).toBeCloseTo(373.1339, 4)
  })
})
