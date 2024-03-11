import { ABSOLUTE_ZERO_ºC } from './constants'
import { newtonToKelvin } from './newtonToKelvin'

describe('newtonToKelvin', () => {
  it('should convert newton to kelvin', () => {
    expect(newtonToKelvin(-90.14)).toBeCloseTo(0, 2)
    expect(newtonToKelvin(0)).toBeCloseTo(-ABSOLUTE_ZERO_ºC, 0)
    expect(newtonToKelvin(33)).toBeCloseTo(373.15, 2)
  })
})
