import Fraction from 'fraction.js'
import { useState } from 'react'
import { FiShuffle } from 'react-icons/fi'
import { Headline } from '../components/Headline'
import { Input } from '../components/Input'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'

export const FractionUtils = () => {
  const [number, setNumber] = useState(0)
  const [fractions, setFraction] = useState('1/1')
  const [isValidFraction, setIsValidFraction] = useState(true)

  const updateNumber = (value: number) => {
    setNumber(value)
    setFraction(new Fraction(value).toFraction())
  }
  const updateFraction = (value: string) => {
    setFraction(value)
    try {
      setNumber(new Fraction(value).valueOf())
      setIsValidFraction(true)
    } catch (e) {
      setIsValidFraction(false)
    }
  }
  return (
    <ScreenWithSideNavigation>
      <Headline>{i18n(en.fractions.title)}</Headline>
      <p>{i18n(en.fractions.description)}</p>
      <div className="grid grid-cols-3 gap-4 items-start md:grid-cols-7">
        <Input
          className="col-span-3"
          type="number"
          aria-label={i18n(en.form.number)}
          value={number}
          onChange={(e) => updateNumber(Number(e.currentTarget.value))}
        />

        <div className="grid col-span-3 justify-center items-center h-full md:col-span-1">
          <FiShuffle />
        </div>
        <div className="col-span-3">
          <Input
            className="w-full"
            type="text"
            aria-label={i18n(en.fractions.inputFraction)}
            value={fractions}
            onChange={(e) => updateFraction(e.currentTarget.value)}
          />
          {!isValidFraction && <div className="text-highlight-1">{i18n(en.fractions.fractionInvalid)}</div>}
        </div>
      </div>
    </ScreenWithSideNavigation>
  )
}
