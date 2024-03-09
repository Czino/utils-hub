import { ABSOLUTE_ZERO_ºC, K_TO_ºD_OFFSET, K_TO_ºD_SCALE } from '../constants'

export const delisleToKelvin = (D: number) => (D + K_TO_ºD_OFFSET) / K_TO_ºD_SCALE - ABSOLUTE_ZERO_ºC
