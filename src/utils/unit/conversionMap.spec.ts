import { ABSOLUTE_ZERO_ºC } from './constants'
import { conversionMap } from './conversionMap'

describe('conversionMap', () => {
  it('should convert temperature units', () => {
    expect(conversionMap.TEMPERATURE.K.K(0)).toEqual(0)
    expect(conversionMap.TEMPERATURE.K.ºC(0)).toBeCloseTo(ABSOLUTE_ZERO_ºC, 1)
    expect(conversionMap.TEMPERATURE.K.ºF(0)).toEqual(-461.5)

    expect(conversionMap.TEMPERATURE.ºC.K(ABSOLUTE_ZERO_ºC)).toEqual(0)
    expect(conversionMap.TEMPERATURE.ºF.K(-461.5)).toBeCloseTo(0, 1)

    expect(conversionMap.TEMPERATURE.ºC.ºF(0)).toEqual(32)
    expect(conversionMap.TEMPERATURE.ºC.ºF(100)).toEqual(212)
    expect(conversionMap.TEMPERATURE.ºF.ºC(32)).toEqual(0)
    expect(conversionMap.TEMPERATURE.ºF.ºC(100)).toEqual(37.8)
  })
  it('should convert distance units', () => {
    expect(conversionMap.DISTANCE.m.m(1000)).toEqual(1000)
    expect(conversionMap.DISTANCE.m.km(1000)).toEqual(1)
    expect(conversionMap.DISTANCE.m.dm(1000)).toEqual(10000)
    expect(conversionMap.DISTANCE.m.cm(1000)).toEqual(100000)
    expect(conversionMap.DISTANCE.m.mm(1000)).toEqual(1000000)
    expect(conversionMap.DISTANCE.m.µm(1000)).toEqual(1000000000)
    expect(conversionMap.DISTANCE.m.nm(1000)).toEqual(1000000000000)

    expect(conversionMap.DISTANCE.km.m(1000)).toEqual(1000000)
    expect(conversionMap.DISTANCE.dm.m(1000)).toEqual(100)
    expect(conversionMap.DISTANCE.cm.m(1000)).toEqual(10)
    expect(conversionMap.DISTANCE.mm.m(1000)).toEqual(1)
    expect(conversionMap.DISTANCE.µm.m(1000)).toEqual(0.001)
    expect(conversionMap.DISTANCE.nm.m(1000)).toEqual(0.000001)

    expect(conversionMap.DISTANCE.km.km(1000)).toEqual(1000)
    expect(conversionMap.DISTANCE.dm.km(1000)).toEqual(0.1)
    expect(conversionMap.DISTANCE.cm.m(1000)).toEqual(10)
    expect(conversionMap.DISTANCE.mm.cm(10)).toEqual(1)
    expect(conversionMap.DISTANCE.µm.cm(1000)).toEqual(0.1)
    expect(conversionMap.DISTANCE.nm.mm(1000)).toEqual(0.001)
  })
  it('should convert weight units', () => {
    expect(conversionMap.WEIGHT.g.g(1000)).toEqual(1000)
    expect(conversionMap.WEIGHT.g.kg(1000)).toEqual(1)
    expect(conversionMap.WEIGHT.g.t(1000)).toEqual(0.001)
    expect(conversionMap.WEIGHT.g.mg(1)).toEqual(1000)
    expect(conversionMap.WEIGHT.g.µg(1)).toEqual(1000000)

    expect(conversionMap.WEIGHT.kg.g(1)).toEqual(1000)
    expect(conversionMap.WEIGHT.t.g(1)).toEqual(1000000)
    expect(conversionMap.WEIGHT.mg.g(1000)).toEqual(1)
    expect(conversionMap.WEIGHT.µg.g(1000)).toEqual(0.001)

    expect(conversionMap.WEIGHT.kg.t(1000)).toEqual(1)
    expect(conversionMap.WEIGHT.t.kg(1)).toEqual(1000)
    expect(conversionMap.WEIGHT.mg.µg(1)).toEqual(1000)
    expect(conversionMap.WEIGHT.µg.g(1000000)).toEqual(1)
  })
})
