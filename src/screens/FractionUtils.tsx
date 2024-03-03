import Fraction from 'fraction.js'
import { useState } from 'react'
import { FiShuffle } from 'react-icons/fi'
import { Headline } from '../components/Headline'
import { Input } from '../components/Input'
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
      <Headline>Fraction converter</Headline>
      <p>
        Need to convert numbers to fractions or vice versa? Try our fraction converter tool for quick and easy
        conversion. Perfect for students, teachers, and professionals.
      </p>
      <div className="grid grid-cols-3 gap-4 items-start md:grid-cols-7">
        <Input
          className="col-span-3"
          type="number"
          aria-label="input number"
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
            aria-label="input fraction"
            value={fractions}
            onChange={(e) => updateFraction(e.currentTarget.value)}
          />
          {!isValidFraction && <div className="text-highlight-1">fraction is invalid</div>}
        </div>
      </div>
    </ScreenWithSideNavigation>
  )
}
