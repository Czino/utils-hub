import { round } from '../math/round'
import { celsiusToKelvin } from './temperature/celsiusToKelvin'
import { delisleToKelvin } from './temperature/delisleToKelvin'
import { fahrenheitToKelvin } from './temperature/fahrenheitToKelvin'
import { kelvinToCelsius } from './temperature/kelvinToCelsius'
import { kelvinToDelisle } from './temperature/kelvinToDelisle'
import { kelvinToFahrenheit } from './temperature/kelvinToFahrenheit'
import { kelvinToLeiden } from './temperature/kelvinToLeiden'
import { kelvinToNewton } from './temperature/kelvinToNewton'
import { kelvinToRankine } from './temperature/kelvinToRankine'
import { kelvinToReaumur } from './temperature/kelvinToReaumur'
import { leidenToKelvin } from './temperature/leidenToKelvin'
import { newtonToKelvin } from './temperature/newtonToKelvin'
import { rankineToKelvin } from './temperature/rankineToKelvin'
import { reaumurToKelvin } from './temperature/reaumurToKelvin'

export const TEMPERATURE_MAP = {
  K: {
    K: (K: number) => K,
    ºC: (K: number) => round(kelvinToCelsius(K), 1),
    ºF: (K: number) => round(kelvinToFahrenheit(K), 1),
    ºR: (K: number) => round(kelvinToRankine(K), 1),
    ºRe: (K: number) => round(kelvinToReaumur(K), 1),
    ºD: (K: number) => round(kelvinToDelisle(K), 1),
    ºN: (K: number) => round(kelvinToNewton(K), 1),
    ºL: (K: number) => round(kelvinToLeiden(K), 1),
  },
  ºC: { K: celsiusToKelvin },
  ºF: { K: fahrenheitToKelvin },
  ºR: { K: rankineToKelvin },
  ºRe: { K: reaumurToKelvin },
  ºD: { K: delisleToKelvin },
  ºN: { K: newtonToKelvin },
  ºL: { K: leidenToKelvin },
}
