import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { HiOutlineArrowsRightLeft } from 'react-icons/hi2'
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { TextLink } from '../../../components/TextLink'
import en from '../../../i18n/en'
import { i18n } from '../../../i18n/i18n'
import { keys } from '../../../utils/object/keys'
import { TYPES, conversionMap, type Unit, type UnitType } from '../../../utils/unit/conversionMap'
import { getURLPath } from '../helpers/getURLPath'
import { updateURLPath } from '../helpers/updateURLPath'

const getUnitWithName = (unit: Unit) => `${unit} (${i18n(en.units[`${unit}.name`])})`
type UnitConverterProps = {
  type: UnitType
  setType: Dispatch<SetStateAction<UnitType>>
  unit1: Unit
  setUnit1: Dispatch<SetStateAction<Unit>>
  unit2: Unit
  setUnit2: Dispatch<SetStateAction<Unit>>
}
export const UnitConverter = ({ type, setType, unit1, setUnit1, unit2, setUnit2 }: UnitConverterProps) => {
  const converters = conversionMap[type]
  const units = keys(converters)
  // @ts-ignore unit should be a key of converters
  const fromUnit1 = converters[unit1]
  // @ts-ignore unit should be a key of converters
  const fromUnit2 = converters[unit2]

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(fromUnit1[unit2](value1))

  useEffect(() => {
    const unitValues = window.location.hash.split('&').map((keyVal) => keyVal.split('='))
    const newValue1 = unitValues[0]?.[1]
    const newValue2 = unitValues[1]?.[1]
    if (!newValue1 || !newValue2) return
    setValue1(Number(newValue1))
    setValue2(Number(newValue2))
  }, [])

  const updateType = (t: UnitType) => {
    const newUnits = keys(conversionMap[t])
    if (!units[0] || !units[1]) return
    setType(t)
    // @ts-ignore unit should be a key of converter
    setUnit1(newUnits[0])
    // @ts-ignore unit should be a key of converter
    setUnit2(newUnits[1])
    // @ts-ignore unit should be a key of converter
    const newValue2 = conversionMap[t][newUnits[0]][newUnits[1]](value1)
    setValue2(newValue2)
    // @ts-ignore unit should be a key of converter
    updateURLPath({ type: t, unit1: newUnits[0], unit2: newUnits[1], value1, value2: newValue2 })
  }
  const updateUnit1 = (unit: Unit) => {
    setUnit1(unit)
    const newValue1 = fromUnit2[unit](value2)
    setValue1(newValue1)
    updateURLPath({ type, unit1: unit, unit2, value1: newValue1, value2 })
  }
  const updateUnit2 = (unit: Unit) => {
    setUnit2(unit)
    const newValue2 = fromUnit1[unit](value1)
    setValue2(newValue2)
    updateURLPath({ type, unit1, unit2: unit, value1, value2: newValue2 })
  }
  const updateValue1 = (value: number) => {
    setValue1(value)
    const newValue2 = fromUnit1[unit2](value)
    setValue2(newValue2)
    updateURLPath({ type, unit1, unit2, value1: value, value2: newValue2 })
  }
  const updateValue2 = (value: number) => {
    setValue2(value)
    const newValue1 = fromUnit2[unit1](value)
    setValue1(newValue1)
    updateURLPath({ type, unit1, unit2, value1: newValue1, value2: value })
  }
  const swapUnits = () => {
    setValue1(value2)
    setValue2(value1)
    setUnit1(unit2)
    setUnit2(unit1)
    updateURLPath({ type, unit1: unit2, unit2: unit1, value1: value2, value2: value1 })
  }

  return (
    <div className="grid gap-8">
      <div className="flex flex-row flex-wrap gap-4">
        {TYPES.map((t, i) => {
          const newUnits = keys(conversionMap[t])
          return (
            <div className="flex flex-row gap-4">
              {i !== 0 && <div className="w-px h-full bg-dark" />}
              <TextLink
                className={[
                  'text-2xl font-bold capitalize',
                  t === type ? 'text-highlight-1 visited:text-highlight-1' : 'text-success-1 visited:text-success-1',
                ].join(' ')}
                // @ts-ignore unit should be a key of converter
                href={getURLPath({ type: t, unit1: newUnits[0], unit2: newUnits[1] })}
                key={t}
                onClick={(e) => {
                  e.preventDefault()
                  updateType(t)
                }}
              >
                {i18n(en.units[t])}
              </TextLink>
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-9 gap-4">
        <div className="grid col-span-4 gap-4">
          <Input
            type="number"
            aria-label={i18n(en.units.inputUnit, { unit: unit1 })}
            value={value1}
            onChange={(e) => updateValue1(Number(e.currentTarget.value))}
          />
          <Select
            aria-label={i18n(en.units.selectUnit1)}
            value={unit1}
            onChange={(value) => updateUnit1(value as Unit)}
          >
            {keys(conversionMap[type]).map((unit) => (
              <option key={unit} value={unit}>
                {getUnitWithName(unit)}
              </option>
            ))}
          </Select>
        </div>
        <div
          className="grid col-span-1 justify-center items-center cursor-pointer"
          onClick={swapUnits}
          aria-label={i18n(en.units.swapUnits)}
        >
          <HiOutlineArrowsRightLeft />
        </div>
        <div className="grid col-span-4 gap-4">
          <Input
            type="number"
            aria-label={i18n(en.units.inputUnit, { unit: unit2 })}
            value={value2}
            onChange={(e) => updateValue2(Number(e.currentTarget.value))}
          />
          <Select
            aria-label={i18n(en.units.selectUnit2)}
            value={unit2}
            onChange={(value) => updateUnit2(value as Unit)}
          >
            {keys(conversionMap[type]).map((unit) => (
              <option key={unit} value={unit}>
                {getUnitWithName(unit)}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  )
}
