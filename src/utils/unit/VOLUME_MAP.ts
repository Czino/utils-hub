import { round } from '../math/round'
import { CENT, CUBED, DEZI, GIGA, KILO, MEGA } from './constants'
import { PRECISION } from './conversionMap'
import { cubicFootToCubicMeter } from './volume/cubicFootToCubicMeter'
import { cubicInchToCubicMeter } from './volume/cubicInchToCubicMeter'
import { cubicMeterToCubicFoot } from './volume/cubicMeterToCubicFoot'
import { cubicMeterToCubicInch } from './volume/cubicMeterToCubicInch'
import { cubicMeterToCubicYard } from './volume/cubicMeterToCubicYard'
import { cubicMeterToCup } from './volume/cubicMeterToCup'
import { cubicMeterToCupUS } from './volume/cubicMeterToCupUS'
import { cubicMeterToDrop } from './volume/cubicMeterToDrop'
import { cubicMeterToGallon } from './volume/cubicMeterToGallon'
import { cubicMeterToGallonUS } from './volume/cubicMeterToGallonUS'
import { cubicMeterToPint } from './volume/cubicMeterToPint'
import { cubicMeterToPintUS } from './volume/cubicMeterToPintUS'
import { cubicMeterToTablespoon } from './volume/cubicMeterToTablespoon'
import { cubicMeterToTablespoonUS } from './volume/cubicMeterToTablespoonUS'
import { cubicMeterToTeaspoon } from './volume/cubicMeterToTeaspoon'
import { cubicMeterToTeaspoonUS } from './volume/cubicMeterToTeaspoonUS'
import { cubicYardToCubicMeter } from './volume/cubicYardToCubicMeter'
import { cupToCubicMeter } from './volume/cupToCubicMeter'
import { cupUSToCubicMeter } from './volume/cupUSToCubicMeter'
import { dropToCubicMeter } from './volume/dropToCubicMeter'
import { gallonToCubicMeter } from './volume/gallonToCubicMeter'
import { gallonUSToCubicMeter } from './volume/gallonUSToCubicMeter'
import { pintToCubicMeter } from './volume/pintToCubicMeter'
import { pintUSToCubicMeter } from './volume/pintUSToCubicMeter'
import { tablespoonToCubicMeter } from './volume/tablespoonToCubicMeter'
import { tablespoonUSToCubicMeter } from './volume/tablespoonUSToCubicMeter'
import { teaspoonToCubicMeter } from './volume/teaspoonToCubicMeter'
import { teaspoonUSToCubicMeter } from './volume/teaspoonUSToCubicMeter'

export const VOLUME_MAP = {
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
    galUS: (m3: number) => round(cubicMeterToGallonUS(m3), PRECISION),
    gal: (m3: number) => round(cubicMeterToGallon(m3), PRECISION),
    'in³': (m3: number) => round(cubicMeterToCubicInch(m3), PRECISION),
    'ft³': (m3: number) => round(cubicMeterToCubicFoot(m3), PRECISION),
    'yd³': (m3: number) => round(cubicMeterToCubicYard(m3), PRECISION),
    tbspUS: (m3: number) => round(cubicMeterToTablespoonUS(m3), PRECISION),
    tbsp: (m3: number) => round(cubicMeterToTablespoon(m3), PRECISION),
    tspUS: (m3: number) => round(cubicMeterToTeaspoonUS(m3), PRECISION),
    tsp: (m3: number) => round(cubicMeterToTeaspoon(m3), PRECISION),
    cupUS: (m3: number) => round(cubicMeterToCupUS(m3), PRECISION),
    cup: (m3: number) => round(cubicMeterToCup(m3), PRECISION),
    pint: (m3: number) => round(cubicMeterToPint(m3), PRECISION),
    pintUS: (m3: number) => round(cubicMeterToPintUS(m3), PRECISION),
    drop: (m3: number) => round(cubicMeterToDrop(m3), PRECISION),
  },
  'dm³': { 'm³': (cm3: number) => cm3 / DEZI ** CUBED },
  'cm³': { 'm³': (cm3: number) => cm3 / CENT ** CUBED },
  'mm³': { 'm³': (mm3: number) => mm3 / KILO ** CUBED },
  'µm³': { 'm³': (µm3: number) => µm3 / MEGA ** CUBED },
  'nm³': { 'm³': (nm3: number) => nm3 / GIGA ** CUBED },
  'km³': { 'm³': (km3: number) => km3 * KILO ** CUBED },
  L: { 'm³': (L: number) => L / DEZI ** CUBED },
  mL: { 'm³': (mL: number) => mL / CENT ** CUBED },
  galUS: { 'm³': gallonUSToCubicMeter },
  gal: { 'm³': gallonToCubicMeter },
  'in³': { 'm³': cubicInchToCubicMeter },
  'ft³': { 'm³': cubicFootToCubicMeter },
  'yd³': { 'm³': cubicYardToCubicMeter },
  tbspUS: { 'm³': tablespoonUSToCubicMeter },
  tbsp: { 'm³': tablespoonToCubicMeter },
  tspUS: { 'm³': teaspoonUSToCubicMeter },
  tsp: { 'm³': teaspoonToCubicMeter },
  cupUS: { 'm³': cupUSToCubicMeter },
  cup: { 'm³': cupToCubicMeter },
  pint: { 'm³': pintToCubicMeter },
  pintUS: { 'm³': pintUSToCubicMeter },
  drop: { 'm³': dropToCubicMeter },
}
