import { ABSOLUTE_ZERO_ºC, K_TO_ºF_OFFSET, K_TO_ºF_SCALE } from './constants'

export const fahrenheitToKelvin = (F: number) => (F - K_TO_ºF_OFFSET) / K_TO_ºF_SCALE - ABSOLUTE_ZERO_ºC
