import { useState } from 'react'
import { Headline } from '../components/Headline'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'
import { round } from '../utils/math/round'
import { keys } from '../utils/object/keys'

const UNITS = {
  TEMPERATURE: ['ºC', 'ºF', 'K'],
  DISTANCE: ['m', 'km', 'dm', 'cm', 'mm', 'nm', 'µm'], // TODO add freedom units
  WEIGHT: ['g', 'kg', 't', 'mg', 'µg'], // TODO add freedom units
} as const

type Unit = keyof typeof UNITS
const TYPES: Unit[] = keys(UNITS)

const ABSOLUTE_ZERO_ºC = -274.15
const K_TO_ºF_OFFSET = 32
const K_TO_ºF_SCALE = 1.8

const kelvinToCelsius = (K: number) => K + ABSOLUTE_ZERO_ºC
const kelvinToFahrenheit = (K: number) => K_TO_ºF_SCALE * (K + ABSOLUTE_ZERO_ºC) + K_TO_ºF_OFFSET
const celsiusToKelvin = (C: number) => C - ABSOLUTE_ZERO_ºC
const fahrenheitToKelvin = (F: number) => (F - K_TO_ºF_OFFSET) / K_TO_ºF_SCALE - ABSOLUTE_ZERO_ºC

type ConversionInfo = Record<string, Record<string, (value: number) => number>>

const mapConverters = <T,>(base: T, converters: ConversionInfo) => {
  const nonBaseUnits = keys(converters).filter((key) => key !== base)
  return keys(converters).reduce((obj, key) => {
    if (key === base) return obj

    const convertToBase = obj[key][base]
    nonBaseUnits.forEach((unit) => {
      obj[key][unit] = (value: number) => converters[base][unit](convertToBase(value))
    })
    return obj
  }, converters)
}

const formulas: Record<Unit, ConversionInfo> = {
  TEMPERATURE: mapConverters('K', {
    K: {
      K: (K: number) => K,
      ºC: (C: number) => round(kelvinToCelsius(C), 1),
      ºF: (F: number) => round(kelvinToFahrenheit(F), 1),
    },
    ºC: { K: (C: number) => celsiusToKelvin(C) },
    ºF: { K: (F: number) => fahrenheitToKelvin(F) },
  }),
  DISTANCE: mapConverters('m', {
    m: {
      m: (m: number) => m,
      km: (m: number) => round(m / 1000, 3),
      dm: (m: number) => round(m * 10, 3),
      cm: (m: number) => round(m * 100, 3),
      mm: (m: number) => round(m * 1e3, 3),
      µm: (m: number) => round(m * 1e6, 3),
      nm: (m: number) => round(m * 1e9, 3),
    },
    km: { m: (km: number) => km * 1000 },
    dm: { m: (dm: number) => dm / 10 },
    cm: { m: (cm: number) => cm / 100 },
    mm: { m: (mm: number) => mm / 1e3 },
    µm: { m: (µm: number) => µm / 1e6 },
    nm: { m: (nm: number) => nm / 1e9 },
  }),
}

export const UnitUtils = () => {
  const [type, setType] = useState<Unit>('TEMPERATURE')
  const [unit1, setUnit1] = useState(UNITS[type][0])
  const [unit2, setUnit2] = useState(UNITS[type][1])
  const converters = formulas[type]
  const fromUnit1 = converters[unit1]
  const fromUnit2 = converters[unit2]
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(fromUnit1[unit2](value1))

  const updateType = (type: Unit) => {
    setType(type)
    setUnit1(UNITS[type][0])
    setUnit2(UNITS[type][1])
    setValue1(0)
    setValue2(formulas[type][unit1][unit2](0))
  }
  const updateUnit1 = (unit: string) => {
    setUnit1(unit)
    setValue1(fromUnit2[unit](value2))
  }
  const updateUnit2 = (unit: string) => {
    setUnit2(unit)
    setValue2(fromUnit1[unit](value1))
  }
  const updateValue1 = (value: number) => {
    setValue1(value)
    setValue2(fromUnit1[unit2](value))
  }
  const updateValue2 = (value: number) => {
    setValue2(value)
    setValue1(fromUnit2[unit1](value))
  }
  return (
    <ScreenWithSideNavigation>
      <Headline>Unit utilities</Headline>
      <p>
        Tired of scratching your head over converting units? Say goodbye to confusion! This page lets you effortlessly
        switch between different units, like turning chilly Celsius into toasty Fahrenheit, so you're never left in the
        cold.
      </p>
      <select value={type} onChange={(e) => updateType(e.currentTarget.value)}>
        {TYPES.map((t) => (
          <option key={t} value={t}>
            {t.toLowerCase()}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-8 gap-4">
        <input
          className="col-span-2"
          type="number"
          value={value1}
          onChange={(e) => updateValue1(Number(e.currentTarget.value))}
        />
        <select value={unit1} onChange={(e) => updateUnit1(e.currentTarget.value)}>
          {UNITS[type].map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
        <input
          className="col-span-2"
          type="number"
          value={value2}
          onChange={(e) => updateValue2(Number(e.currentTarget.value))}
        />
        <select value={unit2} onChange={(e) => updateUnit2(e.currentTarget.value)}>
          {UNITS[type].map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </div>
    </ScreenWithSideNavigation>
  )
}
