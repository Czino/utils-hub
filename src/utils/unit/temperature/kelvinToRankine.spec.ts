import { ABSOLUTE_ZERO_ºC } from '../constants'
import { kelvinToRankine } from './kelvinToRankine'

describe('kelvinToRankine', () => {
  it('should convert kelvin to rankine', () => {
    expect(kelvinToRankine(0)).toEqual(0)
    expect(kelvinToRankine(-ABSOLUTE_ZERO_ºC)).toBeCloseTo(491.67, 3)
    expect(kelvinToRankine(373.1339)).toBeCloseTo(671.641, 3)
  })
})
