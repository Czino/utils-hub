import { ABSOLUTE_ZERO_ºC } from '../constants'
import { celsiusToKelvin } from './celsiusToKelvin'

describe('celsiusToKelvin', () => {
  it('should convert celsius to kelvin', () => {
    expect(celsiusToKelvin(0)).toEqual(-ABSOLUTE_ZERO_ºC)
    expect(celsiusToKelvin(ABSOLUTE_ZERO_ºC)).toEqual(0)
  })
})
