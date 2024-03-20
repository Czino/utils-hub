import { conversionMap } from './conversionMap'
import { ABSOLUTE_ZERO_ºC } from './temperature/constants'

describe('TEMPERATURE_MAP', () => {
  it('should convert temperature units', () => {
    expect(conversionMap.temperature.K.K(0)).toEqual(0)
    expect(conversionMap.temperature.K.ºC(0)).toBeCloseTo(ABSOLUTE_ZERO_ºC, 1)
    expect(conversionMap.temperature.K.ºF(0)).toEqual(-459.7)
    expect(conversionMap.temperature.K.ºR(0)).toEqual(0)
    expect(conversionMap.temperature.K.ºRe(0)).toEqual(-218.5)
    expect(conversionMap.temperature.K.ºD(0)).toEqual(-509.7)
    expect(conversionMap.temperature.K.ºN(0)).toEqual(-90.1)
    expect(conversionMap.temperature.K.ºL(0)).toEqual(-20.1)

    expect(conversionMap.temperature.ºC.K(ABSOLUTE_ZERO_ºC)).toEqual(0)
    expect(conversionMap.temperature.ºF.K(-459.67)).toBeCloseTo(0, 1)

    expect(conversionMap.temperature.ºC.ºF(0)).toEqual(32)
    expect(conversionMap.temperature.ºC.ºF(100)).toEqual(212)
    expect(conversionMap.temperature.ºF.ºC(32)).toEqual(0)
    expect(conversionMap.temperature.ºF.ºC(100)).toEqual(37.8)
  })
})
