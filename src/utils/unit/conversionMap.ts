import { round } from '../math/round'
import { keys } from '../object/keys'
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
import { atmosphereToPascal } from './pressure/atmosphereToPascal'
import { barToPascal } from './pressure/barToPascal'
import { mmHgToPascal } from './pressure/mmHgToPascal'
import { pascalToAtmosphere } from './pressure/pascalToAtmosphere'
import { pascalToBar } from './pressure/pascalToBar'
import { pascalToMMHG } from './pressure/pascalToMMHG'
import { pascalToPSF } from './pressure/pascalToPSF'
import { pascalToPSI } from './pressure/pascalToPSI'
import { pascalToTechnicalAtmosphere } from './pressure/pascalToTechnicalAtmosphere'
import { pascalToTorr } from './pressure/pascalToTorr'
import { psfToPascal } from './pressure/psfToPascal'
import { psiToPascal } from './pressure/psiToPascal'
import { technicalAtmosphereToPascal } from './pressure/technicalAtmosphereToPascal'
import { torrToPascal } from './pressure/torrToPascal'
import { celsiusToKelvin } from './temperature/celsiusToKelvin'
import { delisleToKelvin } from './temperature/delisleToKelvin'
import { fahrenheitToKelvin } from './temperature/fahrenheitToKelvin'
import { kelvinToCelsius } from './temperature/kelvinToCelsius'
import { kelvinToDelisle } from './temperature/kelvinToDelisle'
import { kelvinToFahrenheit } from './temperature/kelvinToFahrenheit'
import { kelvinToLeiden } from './temperature/kelvinToLeiden'
import { kelvinToNewton } from './temperature/kelvinToNewton'
import { kelvinToRankine } from './temperature/kelvinToRankine'
import { kelvinToReaumur } from './temperature/kelvinToReaumur'
import { leidenToKelvin } from './temperature/leidenToKelvin'
import { newtonToKelvin } from './temperature/newtonToKelvin'
import { rankineToKelvin } from './temperature/rankineToKelvin'
import { reaumurToKelvin } from './temperature/reaumurToKelvin'

const PRECISION = 3

const GRAMS_PER_OUNCE = 28.349523125
const GRAMS_PER_POUND = 453.59237
const GRAMS_PER_STONE = 6350.29318

// TODO add velocity
// TODO add area
// TODO add energy
// TODO add data size
export const baseMap = {
  temperature: {
    K: {
      K: (K: number) => K,
      ºC: (K: number) => round(kelvinToCelsius(K), 1),
      ºF: (K: number) => round(kelvinToFahrenheit(K), 1),
      ºR: (K: number) => round(kelvinToRankine(K), 1),
      ºRe: (K: number) => round(kelvinToReaumur(K), 1),
      ºD: (K: number) => round(kelvinToDelisle(K), 1),
      ºN: (K: number) => round(kelvinToNewton(K), 1),
      ºL: (K: number) => round(kelvinToLeiden(K), 1),
    },
    ºC: { K: celsiusToKelvin },
    ºF: { K: fahrenheitToKelvin },
    ºR: { K: rankineToKelvin },
    ºRe: { K: reaumurToKelvin },
    ºD: { K: delisleToKelvin },
    ºN: { K: newtonToKelvin },
    ºL: { K: leidenToKelvin },
  },
  distance: {
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
  weight: {
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
  volume: {
    'm³': {
      'm³': (m3: number) => m3,
      'dm³': (m3: number) => round(m3 * DEZI ** CUBED, PRECISION),
      'cm³': (m3: number) => round(m3 * CENT ** CUBED, PRECISION),
      'mm³': (m3: number) => round(m3 * KILO ** CUBED, PRECISION),
      'µm³': (m3: number) => round(m3 * MEGA ** CUBED, PRECISION),
      'nm³': (m3: number) => round(m3 * GIGA ** CUBED, PRECISION),
      'km³': (m3: number) => round(m3 / KILO ** CUBED, PRECISION),
      L: (m3: number) => round(m3 * DEZI ** CUBED, PRECISION),
      mL: (m3: number) => round(m3 * CENT ** CUBED, PRECISION),
    },
    'dm³': { 'm³': (cm3: number) => cm3 / DEZI ** CUBED },
    'cm³': { 'm³': (cm3: number) => cm3 / CENT ** CUBED },
    'mm³': { 'm³': (mm3: number) => mm3 / KILO ** CUBED },
    'µm³': { 'm³': (µm3: number) => µm3 / MEGA ** CUBED },
    'nm³': { 'm³': (nm3: number) => nm3 / GIGA ** CUBED },
    'km³': { 'm³': (km3: number) => km3 * KILO ** CUBED },
    L: { 'm³': (L: number) => L / DEZI ** CUBED },
    mL: { 'm³': (mL: number) => mL / CENT ** CUBED },
  },
  pressure: {
    Pa: {
      Pa: (Pa: number) => Pa,
      kPa: (Pa: number) => round(Pa / KILO, PRECISION),
      MPa: (Pa: number) => round(Pa / MEGA, PRECISION),
      bar: (Pa: number) => round(pascalToBar(Pa), PRECISION),
      mb: (Pa: number) => round(pascalToBar(Pa) * KILO, PRECISION),
      atm: (Pa: number) => round(pascalToAtmosphere(Pa), PRECISION),
      mmHg: (Pa: number) => round(pascalToMMHG(Pa), PRECISION),
      psi: (Pa: number) => round(pascalToPSI(Pa), PRECISION),
      torr: (Pa: number) => round(pascalToTorr(Pa), PRECISION),
      at: (Pa: number) => round(pascalToTechnicalAtmosphere(Pa), PRECISION),
      psf: (Pa: number) => round(pascalToPSF(Pa), PRECISION),
    },
    kPa: { Pa: (kPa: number) => kPa * KILO },
    MPa: { Pa: (MPa: number) => MPa * MEGA },
    bar: { Pa: barToPascal },
    mb: { Pa: (mb: number) => barToPascal(mb) / KILO },
    atm: { Pa: atmosphereToPascal },
    mmHg: { Pa: mmHgToPascal },
    psi: { Pa: psiToPascal },
    torr: { Pa: torrToPascal },
    at: { Pa: technicalAtmosphereToPascal },
    psf: { Pa: psfToPascal },
  },
}

export type UnitType = keyof typeof baseMap
export const TYPES: UnitType[] = keys(baseMap)
export type TemperatureUnit = keyof typeof baseMap.temperature
export type distanceUnit = keyof typeof baseMap.distance
export type WeightUnit = keyof typeof baseMap.weight
export type VolumeUnit = keyof typeof baseMap.volume
export type PressureUnit = keyof typeof baseMap.pressure
export type Unit = TemperatureUnit | distanceUnit | WeightUnit | VolumeUnit | PressureUnit

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
  temperature: mapConverters<TemperatureUnit>('K', baseMap.temperature),
  distance: mapConverters<distanceUnit>('m', baseMap.distance),
  weight: mapConverters<WeightUnit>('g', baseMap.weight),
  volume: mapConverters<VolumeUnit>('m³', baseMap.volume),
  pressure: mapConverters<PressureUnit>('Pa', baseMap.pressure),
}
