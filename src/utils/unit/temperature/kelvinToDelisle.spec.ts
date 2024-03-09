import { ABSOLUTE_ZERO_ºC } from '../constants'
import { kelvinToDelisle } from './kelvinToDelisle'

describe('kelvinToDelisle', () => {
  it('should convert kelvin to delisle', () => {
    expect(kelvinToDelisle(0)).toBeCloseTo(-509.72, 2)
    expect(kelvinToDelisle(-ABSOLUTE_ZERO_ºC)).toBeCloseTo(-100, 0)
    expect(kelvinToDelisle(373.1339)).toBeCloseTo(49.98, 2)
  })
})
