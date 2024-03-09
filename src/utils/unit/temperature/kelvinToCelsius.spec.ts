import { ABSOLUTE_ZERO_ºC } from '../constants'
import { kelvinToCelsius } from './kelvinToCelsius'

describe('kelvinToCelsius', () => {
  it('should convert kelvin to celsius', () => {
    expect(kelvinToCelsius(0)).toEqual(ABSOLUTE_ZERO_ºC)
    expect(kelvinToCelsius(-ABSOLUTE_ZERO_ºC)).toEqual(0)
  })
})
