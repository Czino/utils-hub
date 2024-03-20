import { conversionMap } from './conversionMap'

describe('WEIGHT_MAP', () => {
  it('should convert weight units', () => {
    expect(conversionMap.weight.g.g(1000)).toEqual(1000)
    expect(conversionMap.weight.g.kg(1000)).toEqual(1)
    expect(conversionMap.weight.g.t(1000)).toEqual(0.001)
    expect(conversionMap.weight.g.mg(1)).toEqual(1000)
    expect(conversionMap.weight.g.µg(1)).toEqual(1000000)
    expect(conversionMap.weight.g.oz(1)).toEqual(0.035)
    expect(conversionMap.weight.g.lb(1)).toEqual(0.002)
    expect(conversionMap.weight.g.st(1000)).toEqual(0.157)

    expect(conversionMap.weight.kg.g(1)).toEqual(1000)
    expect(conversionMap.weight.t.g(1)).toEqual(1000000)
    expect(conversionMap.weight.mg.g(1000)).toEqual(1)
    expect(conversionMap.weight.µg.g(1000)).toEqual(0.001)
    expect(conversionMap.weight.oz.g(1)).toEqual(28.349523125)
    expect(conversionMap.weight.lb.g(1)).toEqual(453.59237)
    expect(conversionMap.weight.st.g(1)).toEqual(6350.29318)

    expect(conversionMap.weight.kg.t(1000)).toEqual(1)
    expect(conversionMap.weight.t.kg(1)).toEqual(1000)
    expect(conversionMap.weight.mg.µg(1)).toEqual(1000)
    expect(conversionMap.weight.µg.g(1000000)).toEqual(1)
    expect(conversionMap.weight.oz.lb(16)).toEqual(1)
  })
})
