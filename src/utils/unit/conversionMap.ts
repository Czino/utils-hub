import { round } from '../math/round'
import { keys } from '../object/keys'
import { celsiusToKelvin } from './celsiusToKelvin'
import { CENT, DEZI, GIGA, KILO, MEGA } from './constants'
import { fahrenheitToKelvin } from './fahrenheitToKelvin'
import { kelvinToCelsius } from './kelvinToCelsius'
import { kelvinToFahrenheit } from './kelvinToFahrenheit'

const PRECISION = 3

export const baseMap = {
  TEMPERATURE: {
    K: {
      K: (K: number) => K,
      ºC: (C: number) => round(kelvinToCelsius(C), 1),
      ºF: (F: number) => round(kelvinToFahrenheit(F), 1),
    },
    ºC: { K: celsiusToKelvin },
    ºF: { K: fahrenheitToKelvin },
  },
  // TODO add freedom units
  DISTANCE: {
    m: {
      m: (m: number) => m,
      km: (m: number) => round(m / KILO, PRECISION),
      dm: (m: number) => round(m * DEZI, PRECISION),
      cm: (m: number) => round(m * CENT, PRECISION),
      mm: (m: number) => round(m * KILO, PRECISION),
      µm: (m: number) => round(m * MEGA, PRECISION),
      nm: (m: number) => round(m * GIGA, PRECISION),
    },
    km: { m: (km: number) => km * KILO },
    dm: { m: (dm: number) => dm / DEZI },
    cm: { m: (cm: number) => cm / CENT },
    mm: { m: (mm: number) => mm / KILO },
    µm: { m: (µm: number) => µm / MEGA },
    nm: { m: (nm: number) => nm / GIGA },
  },
  // TODO add freedom units
  WEIGHT: {
    g: {
      g: (g: number) => g,
      kg: (g: number) => round(g / KILO, PRECISION),
      t: (g: number) => round(g / MEGA, PRECISION),
      mg: (g: number) => round(g * KILO, PRECISION),
      µg: (g: number) => round(g * MEGA, PRECISION),
    },
    kg: { g: (kg: number) => kg * KILO },
    t: { g: (t: number) => t * MEGA },
    mg: { g: (mg: number) => mg / KILO },
    µg: { g: (µg: number) => µg / MEGA },
  },
}

export type UnitType = keyof typeof baseMap
export const TYPES: UnitType[] = keys(baseMap)
export type TemperatureUnit = keyof typeof baseMap.TEMPERATURE
export type DistanceUnit = keyof typeof baseMap.DISTANCE
export type WeightUnit = keyof typeof baseMap.WEIGHT
export type Unit = TemperatureUnit | DistanceUnit | WeightUnit

type PartialConversionInfo = Record<string, Record<string, (value: number) => number>>
type ConversionInfo<U extends string> = Record<U, Record<U, (value: number) => number>>

const mapConverters = <U extends string>(base: string, converters: PartialConversionInfo) => {
  const nonBaseUnits = keys(converters).filter((key) => key !== base)
  return keys(converters).reduce((obj, key) => {
    if (key === base) return obj

    const convertToBase = obj[key]?.[base]
    if (!convertToBase) return obj

    nonBaseUnits.forEach((unit) => {
      if (!obj) return
      if (!(key in obj)) return
      obj[key]![unit] = (value: number) => converters?.[base]?.[unit]?.(convertToBase(value)) || 0
    })
    return obj
  }, converters) as ConversionInfo<U>
}

export const conversionMap = {
  TEMPERATURE: mapConverters<TemperatureUnit>('K', baseMap.TEMPERATURE),
  DISTANCE: mapConverters<DistanceUnit>('m', baseMap.DISTANCE),
  WEIGHT: mapConverters<WeightUnit>('g', baseMap.WEIGHT),
}
