import { conversionMap } from './conversionMap'

describe('DISTANCE_MAP', () => {
  it('should convert distance units', () => {
    expect(conversionMap.distance.m.m(1000)).toEqual(1000)
    expect(conversionMap.distance.m.km(1000)).toEqual(1)
    expect(conversionMap.distance.m.dm(1000)).toEqual(10000)
    expect(conversionMap.distance.m.cm(1000)).toEqual(100000)
    expect(conversionMap.distance.m.mm(1000)).toEqual(1000000)
    expect(conversionMap.distance.m.µm(1000)).toEqual(1000000000)
    expect(conversionMap.distance.m.nm(1000)).toEqual(1000000000000)
    expect(conversionMap.distance.m.in(1000)).toEqual(39370.079)
    expect(conversionMap.distance.m.ft(1000)).toEqual(3280.84)
    expect(conversionMap.distance.m.yd(1000)).toEqual(1093.613)
    expect(conversionMap.distance.m.mi(1000)).toEqual(0.621)
    expect(conversionMap.distance.m.nmi(1000)).toEqual(0.54)

    expect(conversionMap.distance.km.m(1000)).toEqual(1000000)
    expect(conversionMap.distance.dm.m(1000)).toEqual(100)
    expect(conversionMap.distance.cm.m(1000)).toEqual(10)
    expect(conversionMap.distance.mm.m(1000)).toEqual(1)
    expect(conversionMap.distance.µm.m(1000)).toEqual(0.001)
    expect(conversionMap.distance.nm.m(1000)).toEqual(0.000001)
    expect(conversionMap.distance.in.m(1)).toEqual(0.0254)
    expect(conversionMap.distance.ft.m(1)).toEqual(0.3048)
    expect(conversionMap.distance.yd.m(1)).toEqual(0.9144)
    expect(conversionMap.distance.mi.m(1)).toEqual(1609.344)
    expect(conversionMap.distance.nmi.m(1)).toEqual(1852)

    expect(conversionMap.distance.km.km(1000)).toEqual(1000)
    expect(conversionMap.distance.dm.km(1000)).toEqual(0.1)
    expect(conversionMap.distance.cm.m(1000)).toEqual(10)
    expect(conversionMap.distance.mm.cm(10)).toEqual(1)
    expect(conversionMap.distance.µm.cm(1000)).toEqual(0.1)
    expect(conversionMap.distance.nm.mm(1000)).toEqual(0.001)
    expect(conversionMap.distance.in.cm(1)).toEqual(2.54)
    expect(conversionMap.distance.ft.cm(1)).toEqual(30.48)
  })
})