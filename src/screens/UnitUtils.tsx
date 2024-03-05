import { useState } from 'react'
import { FiShuffle } from 'react-icons/fi'
import { Headline } from '../components/Headline'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import en from '../i18n/en'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'
import { keys } from '../utils/object/keys'
import { TYPES, conversionMap, type Unit, type UnitType } from '../utils/unit/conversionMap'

export const UnitUtils = () => {
  const [type, setType] = useState<UnitType>('TEMPERATURE')
  const converters = conversionMap[type]
  const units = keys(converters)
  const [unit1, setUnit1] = useState(units[0] || 'ºC')
  const [unit2, setUnit2] = useState(units[1] || 'ºF')
  // @ts-ignore unit should be a key of converters
  const fromUnit1 = converters[unit1]
  // @ts-ignore unit should be a key of converters
  const fromUnit2 = converters[unit2]
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(fromUnit1[unit2](value1))

  const updateType = (t: UnitType) => {
    const newUnits = keys(conversionMap[t])
    if (!units[0] || !units[1]) return
    setType(t)
    // @ts-ignore unit should be a key of converter
    setUnit1(newUnits[0])
    // @ts-ignore unit should be a key of converter
    setUnit2(newUnits[1])
    // @ts-ignore unit should be a key of converter
    setValue2(conversionMap[t][newUnits[0]][newUnits[1]](value1))
  }
  const updateUnit1 = (unit: Unit) => {
    setUnit1(unit)
    setValue1(fromUnit2[unit](value2))
  }
  const updateUnit2 = (unit: Unit) => {
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
      <Headline>{en.units.title}</Headline>
      <p>{en.units.description}</p>
      <div className="w-[180px]">
        <Select aria-label={en.units.selectUnitType} value={type} onChange={(value) => updateType(value as UnitType)}>
          {TYPES.map((t) => (
            <option key={t} value={t}>
              {en.units[t]}
            </option>
          ))}
        </Select>
      </div>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
        <Input
          className="col-span-2"
          type="number"
          aria-label={`input value for unit ${unit1}`} // TODO localize me with placeholder
          value={value1}
          onChange={(e) => updateValue1(Number(e.currentTarget.value))}
        />
        <div className="col-span-2 md:col-span-1">
          <Select aria-label={en.units.selectUnit1} value={unit1} onChange={(value) => updateUnit1(value as Unit)}>
            {keys(conversionMap[type]).map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </Select>
        </div>
        <div className="grid col-span-4 justify-center items-center md:col-span-1">
          <FiShuffle />
        </div>
        <Input
          className="col-span-2"
          type="number"
          aria-label={`input value for unit ${unit2}`} // TODO localize me with placeholder
          value={value2}
          onChange={(e) => updateValue2(Number(e.currentTarget.value))}
        />
        <div className="col-span-2 md:col-span-1">
          <Select aria-label={en.units.selectUnit1} value={unit2} onChange={(value) => updateUnit2(value as Unit)}>
            {keys(conversionMap[type]).map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </Select>
        </div>
      </div>
    </ScreenWithSideNavigation>
  )
}
