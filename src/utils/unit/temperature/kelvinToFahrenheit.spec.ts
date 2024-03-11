import { ABSOLUTE_ZERO_ºC } from './constants'
import { kelvinToFahrenheit } from './kelvinToFahrenheit'

describe('kelvinToFahrenheit', () => {
  it('should convert kelvin to fahrenheit', () => {
    expect(kelvinToFahrenheit(0)).toBeCloseTo(-459.67, 2)
    expect(kelvinToFahrenheit(-ABSOLUTE_ZERO_ºC)).toEqual(32)
  })
})
