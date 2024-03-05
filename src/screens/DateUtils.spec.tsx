import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { toMatchDiffSnapshot } from 'snapshot-diff'
import { DateUtils } from './DateUtils'
expect.extend({ toMatchDiffSnapshot })

jest.useFakeTimers({ now: new Date('2022-05-03T10:59Z') })

describe('DateUtils', () => {
  const dateLabel = 'input date'
  const localeLabel = 'select locale'
  const value = '2023-01-04 19:32'
  const base = render(<DateUtils />).asFragment()

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })
  it('renders default', () => {
    expect(base).toMatchSnapshot()
  })
  it('updates date and displays in given format', async () => {
    const expected = '2023-01-04T19:32'
    const { asFragment, getByLabelText } = render(<DateUtils />)
    const $date = getByLabelText(dateLabel)
    await userEvent.clear($date)
    await userEvent.type($date, value)
    expect($date).toHaveValue(expected)
    expect(asFragment()).toMatchDiffSnapshot(base)
  })
  it('updates locale and displays localized format', async () => {
    const { asFragment, getByLabelText } = render(<DateUtils />)
    const $date = getByLabelText(dateLabel)
    const $locale = getByLabelText(localeLabel)
    await userEvent.clear($date)
    await userEvent.type($date, value)
    await userEvent.clear($locale)
    await userEvent.type($locale, 'de')
    await userEvent.click(getByLabelText('option de (German)'))
    expect($locale).toHaveValue('de (German)')
    expect(asFragment()).toMatchDiffSnapshot(base)
  })
})
