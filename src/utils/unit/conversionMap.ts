import { keys } from '../object/keys'
import { AREA_MAP } from './AREA_MAP'
import { DATA_MAP } from './DATA_MAP'
import { DISTANCE_MAP } from './DISTANCE_MAP'
import { PRESSURE_MAP } from './PRESSURE_MAP'
import { TEMPERATURE_MAP } from './TEMPERATURE_MAP'
import { VOLUME_MAP } from './VOLUME_MAP'
import { WEIGHT_MAP } from './WEIGHT_MAP'

export const PRECISION = 3

// TODO add velocity
// TODO add energy
export const baseMap = {
  temperature: TEMPERATURE_MAP,
  distance: DISTANCE_MAP,
  area: AREA_MAP,
  volume: VOLUME_MAP,
  weight: WEIGHT_MAP,
  pressure: PRESSURE_MAP,
  data: DATA_MAP,
}

export type UnitType = keyof typeof baseMap
export const TYPES: UnitType[] = keys(baseMap)
export type TemperatureUnit = keyof typeof baseMap.temperature
export type DistanceUnit = keyof typeof baseMap.distance
export type AreaUnit = keyof typeof baseMap.area
export type VolumeUnit = keyof typeof baseMap.volume
export type WeightUnit = keyof typeof baseMap.weight
export type PressureUnit = keyof typeof baseMap.pressure
export type DataUnit = keyof typeof baseMap.data
export type Unit = TemperatureUnit | DistanceUnit | AreaUnit | VolumeUnit | WeightUnit | PressureUnit | DataUnit

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
  distance: mapConverters<DistanceUnit>('m', baseMap.distance),
  area: mapConverters<AreaUnit>('m²', baseMap.area),
  volume: mapConverters<VolumeUnit>('m³', baseMap.volume),
  weight: mapConverters<WeightUnit>('g', baseMap.weight),
  pressure: mapConverters<PressureUnit>('Pa', baseMap.pressure),
  data: mapConverters<DataUnit>('bit', baseMap.data),
}
