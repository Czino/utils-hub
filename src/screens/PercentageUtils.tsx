import { useState } from 'react'
import { FiPercent } from 'react-icons/fi'

import { Headline } from '../components/Headline'
import { InputWithLabel } from '../components/InputWithLabel'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'
import { round } from '../utils/math/round'
import { CENT } from '../utils/unit/constants'

const DEFAULTS = {
  value1: 1,
  value2: 200,
  percentage: 0.5,
}
const PRECISION = 2

export const PercentageUtils = () => {
  const [value1, setValue1] = useState(DEFAULTS.value1)
  const [value2, setValue2] = useState(DEFAULTS.value2)
  const [percentage, setPercentage] = useState(DEFAULTS.percentage)

  const updateValue1 = (value: number) => {
    setValue1(value)
    setPercentage(round((value / value2) * CENT, PRECISION))
  }
  const updateValue2 = (value: number) => {
    setValue2(value)
    setPercentage(round((value1 / value) * CENT, PRECISION))
  }
  const updatePercentage = (value: number) => {
    setPercentage(value)
    setValue2(round(value1 / (value / CENT), PRECISION))
  }

  return (
    <ScreenWithSideNavigation>
      <Headline>{i18n(en.percentages.title)}</Headline>
      <p>{i18n(en.percentages.description)}</p>
      <div className="flex flex-row gap-4 items-center">
        <InputWithLabel
          id="percentages-value-1"
          label={i18n(en.percentages.number1)}
          type="number"
          aria-label={`${i18n(en.form.number)}: ${i18n(en.percentages.number1)}`}
          value={value1}
          onChange={(e) => updateValue1(Number(e.currentTarget.value))}
        />
        <div className="relative">
          <InputWithLabel
            type="number"
            id="percentages-value-percent"
            label={i18n(en.percentages.percent)}
            aria-label={i18n(en.percentages.inputPerecentage)}
            value={percentage}
            className="appearance-none"
            onChange={(e) => updatePercentage(Number(e.currentTarget.value))}
          />
          <FiPercent className="absolute bottom-[8px] md:bottom-2.5 right-6 w-4 h-4 md:w-6 md:h-6" />
        </div>
        <InputWithLabel
          id="percentages-value-2"
          label={i18n(en.percentages.number2)}
          type="number"
          aria-label={`${i18n(en.form.number)}: ${i18n(en.percentages.number2)}`}
          value={value2}
          onChange={(e) => updateValue2(Number(e.currentTarget.value))}
        />
      </div>
    </ScreenWithSideNavigation>
  )
}
