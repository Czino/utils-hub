import { conversionMap } from './conversionMap'

describe('AREA_MAP', () => {
  it('should convert area units', () => {
    expect(conversionMap.area['m²']['m²'](1000)).toEqual(1000)
    expect(conversionMap.area['m²']['dm²'](1)).toEqual(100)
    expect(conversionMap.area['m²']['cm²'](1)).toEqual(10000)
    expect(conversionMap.area['m²']['mm²'](1)).toEqual(1000000)
    expect(conversionMap.area['m²']['µm²'](1)).toEqual(1000000000000)
    expect(conversionMap.area['m²']['nm²'](1)).toEqual(1e18)
    expect(conversionMap.area['m²']['km²'](1000000)).toEqual(1)
    expect(conversionMap.area['m²']['in²'](1)).toEqual(1550.003)
    expect(conversionMap.area['m²']['ft²'](1)).toEqual(10.764)
    expect(conversionMap.area['m²']['yd²'](1)).toEqual(1.196)
    expect(conversionMap.area['m²'].a(1000)).toEqual(10)
    expect(conversionMap.area['m²'].ha(1000)).toEqual(0.1)
    expect(conversionMap.area['m²'].ac(1000)).toEqual(0.247)
    expect(conversionMap.area['m²'].ff(1000)).toEqual(0.187)

    expect(conversionMap.area['m²']['m²'](1000)).toEqual(1000)
    expect(conversionMap.area['dm²']['m²'](100)).toEqual(1)
    expect(conversionMap.area['cm²']['m²'](10000)).toEqual(1)
    expect(conversionMap.area['mm²']['m²'](1000000)).toEqual(1)
    expect(conversionMap.area['µm²']['m²'](1000000000000)).toEqual(1)
    expect(conversionMap.area['nm²']['m²'](1e18)).toEqual(1)
    expect(conversionMap.area['km²']['m²'](1)).toEqual(1000000)

    expect(conversionMap.area.ff.ac(1)).toEqual(1.32)
    expect(conversionMap.area.ha.a(1)).toEqual(100)
    expect(conversionMap.area.ha.ac(1)).toEqual(2.471)
  })
})
