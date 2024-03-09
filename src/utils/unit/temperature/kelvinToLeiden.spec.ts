import { ABSOLUTE_ZERO_ºC } from '../constants'
import { kelvinToLeiden } from './kelvinToLeiden'

describe('kelvinToLeiden', () => {
  it('should convert kelvin to leiden', () => {
    expect(kelvinToLeiden(0)).toBe(-20.15)
    expect(kelvinToLeiden(-ABSOLUTE_ZERO_ºC)).toBeCloseTo(253, 1)
    expect(kelvinToLeiden(373.1339)).toBeCloseTo(352.9839, 4)
  })
})
