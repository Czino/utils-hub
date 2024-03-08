import { round } from '../math/round'
import { keys } from '../object/keys'
import { celsiusToKelvin } from './celsiusToKelvin'
import {
  CENT,
  CUBED,
  DEZI,
  GIGA,
  KILO,
  MEGA,
  METER_PER_FEET,
  METER_PER_INCH,
  METER_PER_MILES,
  METER_PER_NAUTICAL_MILES,
  METER_PER_YARD,
} from './constants'
import { delisleToKelvin } from './delisleToKelvin'
import { fahrenheitToKelvin } from './fahrenheitToKelvin'
import { kelvinToCelsius } from './kelvinToCelsius'
import { kelvinToDelisle } from './kelvinToDelisle'
import { kelvinToFahrenheit } from './kelvinToFahrenheit'
import { kelvinToNewton } from './kelvinToNewton'
import { kelvinToRankine } from './kelvinToRankine'
import { kelvinToReaumur } from './kelvinToReaumur'
import { newtonToKelvin } from './newtonToKelvin'
import { rankineToKelvin } from './rankineToKelvin'
import { reaumurToKelvin } from './reaumurToKelvin'

const PRECISION = 3

const GRAMS_PER_OUNCE = 28.349523125
const GRAMS_PER_POUND = 453.59237
const GRAMS_PER_STONE = 6350.29318

// TODO add velocity
// TODO add area
// TODO add energy
export const baseMap = {
  TEMPERATURE: {
    K: {
      K: (K: number) => K,
      ºC: (C: number) => round(kelvinToCelsius(C), 1),
      ºF: (F: number) => round(kelvinToFahrenheit(F), 1),
      ºR: (R: number) => round(kelvinToRankine(R), 1),
      ºRe: (R: number) => round(kelvinToReaumur(R), 1),
      ºD: (D: number) => round(kelvinToDelisle(D), 1),
      ºN: (N: number) => round(kelvinToNewton(N), 1),
    },
    ºC: { K: celsiusToKelvin },
    ºF: { K: fahrenheitToKelvin },
    ºR: { K: rankineToKelvin },
    ºRe: { K: reaumurToKelvin },
    ºD: { K: delisleToKelvin },
    ºN: { K: newtonToKelvin },
  },
  DISTANCE: {
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
  },
  WEIGHT: {
    g: {
      g: (g: number) => g,
      kg: (g: number) => round(g / KILO, PRECISION),
      t: (g: number) => round(g / MEGA, PRECISION),
      mg: (g: number) => round(g * KILO, PRECISION),
      µg: (g: number) => round(g * MEGA, PRECISION),
      oz: (g: number) => round(g / GRAMS_PER_OUNCE, PRECISION),
      lb: (g: number) => round(g / GRAMS_PER_POUND, PRECISION),
      st: (g: number) => round(g / GRAMS_PER_STONE, PRECISION),
    },
    kg: { g: (kg: number) => kg * KILO },
    t: { g: (t: number) => t * MEGA },
    mg: { g: (mg: number) => mg / KILO },
    µg: { g: (µg: number) => µg / MEGA },
    oz: { g: (oz: number) => oz * GRAMS_PER_OUNCE },
    lb: { g: (lb: number) => lb * GRAMS_PER_POUND },
    st: { g: (st: number) => st * GRAMS_PER_STONE },
  },
  VOLUME: {
    'm³': {
      'm³': (m3: number) => m3,
      'dm³': (m3: number) => round(m3 * DEZI ** CUBED, PRECISION),
      'cm³': (m3: number) => round(m3 * CENT ** CUBED, PRECISION),
      'mm³': (m3: number) => round(m3 * KILO ** CUBED, PRECISION),
      'µm³': (m3: number) => round(m3 * MEGA ** CUBED, PRECISION),
      'nm³': (m3: number) => round(m3 * GIGA ** CUBED, PRECISION),
      'km³': (m3: number) => round(m3 / KILO ** CUBED, PRECISION),
      L: (m3: number) => round(m3 * DEZI ** CUBED, PRECISION),
    },
    'dm³': { 'm³': (cm3: number) => cm3 / DEZI ** CUBED },
    'cm³': { 'm³': (cm3: number) => cm3 / CENT ** CUBED },
    'mm³': { 'm³': (mm3: number) => mm3 / KILO ** CUBED },
    'µm³': { 'm³': (µm3: number) => µm3 / MEGA ** CUBED },
    'nm³': { 'm³': (nm3: number) => nm3 / GIGA ** CUBED },
    'km³': { 'm³': (km3: number) => km3 * KILO ** CUBED },
    L: { 'm³': (km3: number) => km3 / DEZI ** CUBED },
  },
}

export type UnitType = keyof typeof baseMap
export const TYPES: UnitType[] = keys(baseMap)
export type TemperatureUnit = keyof typeof baseMap.TEMPERATURE
export type DistanceUnit = keyof typeof baseMap.DISTANCE
export type WeightUnit = keyof typeof baseMap.WEIGHT
export type VolumeUnit = keyof typeof baseMap.VOLUME
export type Unit = TemperatureUnit | DistanceUnit | WeightUnit | VolumeUnit

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
  VOLUME: mapConverters<VolumeUnit>('m³', baseMap.VOLUME),
}
