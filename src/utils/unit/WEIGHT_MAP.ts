import { round } from '../math/round'
import { KILO, MEGA } from './constants'
import { PRECISION } from './conversionMap'

export const GRAMS_PER_OUNCE = 28.349523125
export const GRAMS_PER_POUND = 453.59237
export const GRAMS_PER_STONE = 6350.29318

export const WEIGHT_MAP = {
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
}
