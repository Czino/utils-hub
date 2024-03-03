import { ABSOLUTE_ZERO_ºC } from './constants'
import { fahrenheitToKelvin } from './fahrenheitToKelvin'

describe('fahrenheitToKelvin', () => {
  it('should convert fahrenheit to kelvin', () => {
    expect(fahrenheitToKelvin(-461.47)).toBeCloseTo(0, 3)
    expect(fahrenheitToKelvin(32)).toEqual(-ABSOLUTE_ZERO_ºC)
  })
})
