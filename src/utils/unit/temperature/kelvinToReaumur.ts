import { ABSOLUTE_ZERO_ºC, K_TO_ºRe_SCALE } from '../constants'

export const kelvinToReaumur = (K: number) => (K + ABSOLUTE_ZERO_ºC) / K_TO_ºRe_SCALE
