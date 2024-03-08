import { K_TO_ºR_SCALE } from './constants'

export const rankineToKelvin = (R: number) => R * K_TO_ºR_SCALE
