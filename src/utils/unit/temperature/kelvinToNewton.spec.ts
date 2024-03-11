import { ABSOLUTE_ZERO_ºC } from './constants'
import { kelvinToNewton } from './kelvinToNewton'

describe('kelvinToNewton', () => {
  it('should convert kelvin to newton', () => {
    expect(kelvinToNewton(0)).toBeCloseTo(-90.14, 2)
    expect(kelvinToNewton(-ABSOLUTE_ZERO_ºC)).toBeCloseTo(0, 0)
    expect(kelvinToNewton(373.1339)).toBeCloseTo(32.99, 2)
  })
})
