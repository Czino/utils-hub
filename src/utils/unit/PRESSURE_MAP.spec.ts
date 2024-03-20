/* eslint-disable max-statements */
import { KILO, MEGA } from './constants'
import { conversionMap } from './conversionMap'

describe('PRESSURE_MAP', () => {
  it('should convert pressure units', () => {
    expect(conversionMap.pressure.Pa.Pa(1000)).toEqual(1000)
    expect(conversionMap.pressure.Pa.kPa(KILO)).toEqual(1)
    expect(conversionMap.pressure.Pa.MPa(MEGA)).toEqual(1)
    expect(conversionMap.pressure.Pa.bar(MEGA)).toEqual(10)
    expect(conversionMap.pressure.Pa.mb(MEGA)).toEqual(10000)
    expect(conversionMap.pressure.Pa.atm(MEGA)).toEqual(9.869)
    expect(conversionMap.pressure.Pa.mmHg(MEGA)).toEqual(7500.638)
    expect(conversionMap.pressure.Pa.psi(MEGA)).toEqual(145.038)
    expect(conversionMap.pressure.Pa.torr(MEGA)).toEqual(7500.638)
    expect(conversionMap.pressure.Pa.at(MEGA)).toEqual(10.197)
    expect(conversionMap.pressure.Pa.psf(MEGA)).toEqual(20885.416)

    expect(conversionMap.pressure.kPa.Pa(1)).toEqual(KILO)
    expect(conversionMap.pressure.MPa.Pa(1)).toEqual(MEGA)
    expect(conversionMap.pressure.bar.Pa(1)).toEqual(100000)
    expect(conversionMap.pressure.mb.Pa(1)).toEqual(100)
    expect(conversionMap.pressure.atm.Pa(1)).toEqual(101325)
    expect(conversionMap.pressure.mmHg.Pa(1)).toEqual(133.322)
    expect(conversionMap.pressure.psi.Pa(1)).toEqual(6894.76)
    expect(conversionMap.pressure.torr.Pa(1)).toEqual(133.322)
    expect(conversionMap.pressure.at.Pa(1)).toEqual(98066.5)
    expect(conversionMap.pressure.psf.Pa(1)).toEqual(47.8803)

    expect(conversionMap.pressure.mmHg.torr(1)).toEqual(1)
    expect(conversionMap.pressure.mmHg.atm(760)).toEqual(1)
    expect(conversionMap.pressure.bar.mb(1)).toEqual(KILO)
  })
})
