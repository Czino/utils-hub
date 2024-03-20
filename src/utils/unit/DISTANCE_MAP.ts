import { round } from '../math/round'
import { CENT, DEZI, GIGA, KILO, MEGA } from './constants'
import { PRECISION } from './conversionMap'

export const METER_PER_INCH = 0.0254
export const METER_PER_FEET = 0.3048
export const METER_PER_YARD = 0.9144
export const METER_PER_MILES = 1609.344
export const METER_PER_NAUTICAL_MILES = 1852

export const DISTANCE_MAP = {
  m: {
    m: (m: number) => m,
    km: (m: number) => round(m / KILO, PRECISION),
    dm: (m: number) => round(m * DEZI, PRECISION),
    cm: (m: number) => round(m * CENT, PRECISION),
    mm: (m: number) => round(m * KILO, PRECISION),
    µm: (m: number) => round(m * MEGA, PRECISION),
    nm: (m: number) => round(m * GIGA, PRECISION),
    in: (m: number) => round(m / METER_PER_INCH, PRECISION),
    ft: (m: number) => round(m / METER_PER_FEET, PRECISION),
    yd: (m: number) => round(m / METER_PER_YARD, PRECISION),
    mi: (m: number) => round(m / METER_PER_MILES, PRECISION),
    nmi: (m: number) => round(m / METER_PER_NAUTICAL_MILES, PRECISION),
  },
  km: { m: (km: number) => km * KILO },
  dm: { m: (dm: number) => dm / DEZI },
  cm: { m: (cm: number) => cm / CENT },
  mm: { m: (mm: number) => mm / KILO },
  µm: { m: (µm: number) => µm / MEGA },
  nm: { m: (nm: number) => nm / GIGA },
  in: { m: (inch: number) => inch * METER_PER_INCH },
  ft: { m: (ft: number) => ft * METER_PER_FEET },
  yd: { m: (yd: number) => yd * METER_PER_YARD },
  mi: { m: (mi: number) => mi * METER_PER_MILES },
  nmi: { m: (nmi: number) => nmi * METER_PER_NAUTICAL_MILES },
}
