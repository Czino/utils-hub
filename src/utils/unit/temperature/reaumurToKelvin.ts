import { ABSOLUTE_ZERO_ºC, K_TO_ºRe_SCALE } from './constants'

export const reaumurToKelvin = (R: number) => R * K_TO_ºRe_SCALE - ABSOLUTE_ZERO_ºC
