import { round } from '../math/round'
import { KILO, MEGA } from './constants'
import { PRECISION } from './conversionMap'
import { atmosphereToPascal } from './pressure/atmosphereToPascal'
import { barToPascal } from './pressure/barToPascal'
import { mmHgToPascal } from './pressure/mmHgToPascal'
import { pascalToAtmosphere } from './pressure/pascalToAtmosphere'
import { pascalToBar } from './pressure/pascalToBar'
import { pascalToMMHG } from './pressure/pascalToMMHG'
import { pascalToPSF } from './pressure/pascalToPSF'
import { pascalToPSI } from './pressure/pascalToPSI'
import { pascalToTechnicalAtmosphere } from './pressure/pascalToTechnicalAtmosphere'
import { pascalToTorr } from './pressure/pascalToTorr'
import { psfToPascal } from './pressure/psfToPascal'
import { psiToPascal } from './pressure/psiToPascal'
import { technicalAtmosphereToPascal } from './pressure/technicalAtmosphereToPascal'
import { torrToPascal } from './pressure/torrToPascal'

export const PRESSURE_MAP = {
  Pa: {
    Pa: (Pa: number) => Pa,
    kPa: (Pa: number) => round(Pa / KILO, PRECISION),
    MPa: (Pa: number) => round(Pa / MEGA, PRECISION),
    bar: (Pa: number) => round(pascalToBar(Pa), PRECISION),
    mb: (Pa: number) => round(pascalToBar(Pa) * KILO, PRECISION),
    atm: (Pa: number) => round(pascalToAtmosphere(Pa), PRECISION),
    mmHg: (Pa: number) => round(pascalToMMHG(Pa), PRECISION),
    psi: (Pa: number) => round(pascalToPSI(Pa), PRECISION),
    torr: (Pa: number) => round(pascalToTorr(Pa), PRECISION),
    at: (Pa: number) => round(pascalToTechnicalAtmosphere(Pa), PRECISION),
    psf: (Pa: number) => round(pascalToPSF(Pa), PRECISION),
  },
  kPa: { Pa: (kPa: number) => kPa * KILO },
  MPa: { Pa: (MPa: number) => MPa * MEGA },
  bar: { Pa: barToPascal },
  mb: { Pa: (mb: number) => barToPascal(mb) / KILO },
  atm: { Pa: atmosphereToPascal },
  mmHg: { Pa: mmHgToPascal },
  psi: { Pa: psiToPascal },
  torr: { Pa: torrToPascal },
  at: { Pa: technicalAtmosphereToPascal },
  psf: { Pa: psfToPascal },
}
