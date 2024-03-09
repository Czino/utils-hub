import { ABSOLUTE_ZERO_ºC } from '../constants'
import { rankineToKelvin } from './rankineToKelvin'

describe('rankineToKelvin', () => {
  it('should convert rankine to kelvin', () => {
    expect(rankineToKelvin(0)).toEqual(0)
    expect(rankineToKelvin(491.67)).toBeCloseTo(-ABSOLUTE_ZERO_ºC, 3)
    expect(rankineToKelvin(671.641)).toBeCloseTo(373.1339, 3)
  })
})
