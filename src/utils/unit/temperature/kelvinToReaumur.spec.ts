import { ABSOLUTE_ZERO_ºC } from '../constants'
import { kelvinToReaumur } from './kelvinToReaumur'

describe('kelvinToReaumur', () => {
  it('should convert kelvin to reaumur', () => {
    expect(kelvinToReaumur(0)).toBeCloseTo(-218.52, 2)
    expect(kelvinToReaumur(-ABSOLUTE_ZERO_ºC)).toEqual(0)
    expect(kelvinToReaumur(373.1339)).toBeCloseTo(79.987, 3)
  })
})
