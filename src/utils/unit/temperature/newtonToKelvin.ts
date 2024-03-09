import { ABSOLUTE_ZERO_ºC, K_TO_ºN_SCALE } from '../constants'

export const newtonToKelvin = (N: number) => N * K_TO_ºN_SCALE - ABSOLUTE_ZERO_ºC
