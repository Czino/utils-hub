import { round } from '../math/round'
import { acresToSquareMeter } from './area/acresToSquareMeter'
import { areToSquareMeter } from './area/areToSquareMeter'
import { footballFieldToSquareMeter } from './area/footballFieldToSquareMeter'
import { hectaresToSquareMeter } from './area/hectaresToSquareMeter'
import { squareFootToSquareMeter } from './area/squareFootToSquareMeter'
import { squareInchToSquareMeter } from './area/squareInchToSquareMeter'
import { squareMeterToAcre } from './area/squareMeterToAcre'
import { squareMeterToAre } from './area/squareMeterToAre'
import { squareMeterToFootballField } from './area/squareMeterToFootballField'
import { squareMeterToHectare } from './area/squareMeterToHectare'
import { squareMeterToSquareFoot } from './area/squareMeterToSquareFoot'
import { squareMeterToSquareInch } from './area/squareMeterToSquareInch'
import { squareMeterToSquareYard } from './area/squareMeterToSquareYard'
import { squareYardToSquareMeter } from './area/squareYardToSquareMeter'
import { CENT, DEZI, GIGA, KILO, MEGA, SQUARED } from './constants'
import { PRECISION } from './conversionMap'

export const AREA_MAP = {
  'm²': {
    'm²': (m2: number) => m2,
    'dm²': (m2: number) => round(m2 * DEZI ** SQUARED, PRECISION),
    'cm²': (m2: number) => round(m2 * CENT ** SQUARED, PRECISION),
    'mm²': (m2: number) => round(m2 * KILO ** SQUARED, PRECISION),
    'µm²': (m2: number) => round(m2 * MEGA ** SQUARED, PRECISION),
    'nm²': (m2: number) => round(m2 * GIGA ** SQUARED, PRECISION),
    'km²': (m2: number) => round(m2 / KILO ** SQUARED, PRECISION),
    'in²': (m2: number) => round(squareMeterToSquareInch(m2), PRECISION),
    'ft²': (m2: number) => round(squareMeterToSquareFoot(m2), PRECISION),
    'yd²': (m2: number) => round(squareMeterToSquareYard(m2), PRECISION),
    ac: (m2: number) => round(squareMeterToAcre(m2), PRECISION),
    a: (m2: number) => round(squareMeterToAre(m2), PRECISION),
    ha: (m2: number) => round(squareMeterToHectare(m2), PRECISION),
    ff: (m2: number) => round(squareMeterToFootballField(m2), PRECISION),
  },
  'dm²': { 'm²': (cm2: number) => cm2 / DEZI ** SQUARED },
  'cm²': { 'm²': (cm2: number) => cm2 / CENT ** SQUARED },
  'mm²': { 'm²': (mm2: number) => mm2 / KILO ** SQUARED },
  'µm²': { 'm²': (µm2: number) => µm2 / MEGA ** SQUARED },
  'nm²': { 'm²': (nm2: number) => nm2 / GIGA ** SQUARED },
  'km²': { 'm²': (km2: number) => km2 * KILO ** SQUARED },
  'in²': { 'm²': squareInchToSquareMeter },
  'ft²': { 'm²': squareFootToSquareMeter },
  'yd²': { 'm²': squareYardToSquareMeter },
  ac: { 'm²': acresToSquareMeter },
  a: { 'm²': areToSquareMeter },
  ha: { 'm²': hectaresToSquareMeter },
  ff: { 'm²': footballFieldToSquareMeter },
}
