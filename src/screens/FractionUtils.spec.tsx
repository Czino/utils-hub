import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FractionUtils } from './FractionUtils'

describe('FractionUtils', () => {
  const numberLabel = 'input number'
  const fractionLabel = 'input fraction'
  it('updates number and calculates its fraction', async () => {
    const value = 0.75
    const { getByLabelText } = render(<FractionUtils />)
    const $number = getByLabelText(numberLabel)
    const $fractions = getByLabelText(fractionLabel)
    await userEvent.clear($number)
    await userEvent.type($number, String(value))
    expect($number).toHaveValue(value)
    expect($fractions).toHaveValue('3/4')
  })
  it('updates fraction and calculates its number', async () => {
    const value = '2/5'
    const { getByLabelText } = render(<FractionUtils />)
    const $number = getByLabelText(numberLabel)
    const $fractions = getByLabelText(fractionLabel)
    await userEvent.clear($fractions)
    await userEvent.type($fractions, String(value))
    expect($number).toHaveValue(0.4)
    expect($fractions).toHaveValue(value)
  })
})
