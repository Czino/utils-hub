import { celsiusToKelvin } from './celsiusToKelvin'
import { ABSOLUTE_ZERO_ºC } from './constants'

describe('celsiusToKelvin', () => {
  it('should convert celsius to kelvin', () => {
    expect(celsiusToKelvin(0)).toEqual(-ABSOLUTE_ZERO_ºC)
    expect(celsiusToKelvin(ABSOLUTE_ZERO_ºC)).toEqual(0)
  })
})
