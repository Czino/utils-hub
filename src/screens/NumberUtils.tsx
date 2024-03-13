import { useState } from 'react'

import { Headline } from '../components/Headline'
import { InputWithLabel } from '../components/InputWithLabel'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'

const BASE_10 = 10
const MIN_BASE = 2
const MAX_BASE = 36
const DEFAULTS = {
  BASE: 16,
}
export const NumberUtils = () => {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [base, setBase] = useState(DEFAULTS.BASE)

  const updateNumber1 = (value: string) => {
    setNumber1(value)
    setNumber2(parseInt(value, BASE_10).toString(base))
  }
  const updateNumber2 = (value: string) => {
    setNumber2(value)
    setNumber1(parseInt(value, base).toString(BASE_10))
  }
  const updateBase = (value: number) => {
    const newBase = Math.min(Math.max(value, MIN_BASE), MAX_BASE)
    setBase(newBase)
    setNumber2(parseInt(number1, BASE_10).toString(newBase))
  }

  return (
    <ScreenWithSideNavigation>
      <Headline>{i18n(en.numbers.title)}</Headline>
      <p>{i18n(en.numbers.description)}</p>
      <div className="flex flex-row gap-4 items-center">
        <InputWithLabel
          label={i18n(en.numbers.number1)}
          type="number"
          aria-label={`${i18n(en.form.number)}: ${i18n(en.numbers.number1)}`}
          value={number1}
          onChange={(e) => updateNumber1(e.currentTarget.value)}
        />
        <InputWithLabel
          label={i18n(en.numbers.base)}
          type="number"
          aria-label={`${i18n(en.form.number)}: ${i18n(en.numbers.base)}`}
          value={base}
          onChange={(e) => updateBase(Number(e.currentTarget.value))}
        />
        <InputWithLabel
          id="numbers-value-2"
          label={i18n(en.numbers.number2)}
          type="text"
          aria-label={`${i18n(en.form.number)}: ${i18n(en.numbers.number2)}`}
          value={number2}
          onChange={(e) => updateNumber2(e.currentTarget.value)}
        />
      </div>
    </ScreenWithSideNavigation>
  )
}
