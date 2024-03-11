import { ABSOLUTE_ZERO_ºC, K_TO_ºN_SCALE } from './constants'

export const kelvinToNewton = (K: number) => (K + ABSOLUTE_ZERO_ºC) / K_TO_ºN_SCALE
