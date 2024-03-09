import { ABSOLUTE_ZERO_ºC } from '../constants'
import { delisleToKelvin } from './delisleToKelvin'

describe('delisleToKelvin', () => {
  it('should convert delisle to kelvin', () => {
    expect(delisleToKelvin(0)).toBeCloseTo(339.82, 2)
    expect(delisleToKelvin(-100)).toBeCloseTo(-ABSOLUTE_ZERO_ºC, 3)
    expect(delisleToKelvin(50)).toBeCloseTo(373.15, 2)
  })
})
