import { ABSOLUTE_ZERO_ºC, K_TO_ºF_OFFSET, K_TO_ºF_SCALE } from './constants'

export const kelvinToFahrenheit = (K: number) => K_TO_ºF_SCALE * (K + ABSOLUTE_ZERO_ºC) + K_TO_ºF_OFFSET
