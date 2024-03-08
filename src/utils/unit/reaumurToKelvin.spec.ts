import { ABSOLUTE_ZERO_ºC } from './constants'
import { reaumurToKelvin } from './reaumurToKelvin'

describe('reaumurToKelvin', () => {
  it('should convert reaumur to kelvin', () => {
    expect(reaumurToKelvin(-218.52)).toBeCloseTo(0, 1)
    expect(reaumurToKelvin(0)).toEqual(-ABSOLUTE_ZERO_ºC)
    expect(reaumurToKelvin(79.987)).toBeCloseTo(373.134, 3)
  })
})
