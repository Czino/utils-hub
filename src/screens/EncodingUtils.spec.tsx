import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { selectValue } from '../../test/helpers/selectValue'
import { EncodingUtils } from './EncodingUtils'

describe('EncodingUtils', () => {
  const textLabel = 'input text'
  const encodingLabel = 'select encoding'
  const encodedTextLabel = 'input encoded text'
  const value = 'test'

  it('updates text and displays in base64 encoding', async () => {
    const expected = 'dGVzdA=='
    const { getByLabelText } = render(<EncodingUtils />)
    const $text = getByLabelText(textLabel)
    const $encoding = getByLabelText(encodingLabel)
    await userEvent.clear($text)
    await userEvent.type($text, value)
    await selectValue($encoding, 'base64')
    expect(getByLabelText(encodedTextLabel)).toHaveTextContent(expected)
  })
  it('updates text and displays in hex encoding', async () => {
    const expected = '74657374'
    const { getByLabelText } = render(<EncodingUtils />)
    const $text = getByLabelText(textLabel)
    const $encoding = getByLabelText(encodingLabel)
    await userEvent.clear($text)
    await userEvent.type($text, value)
    await selectValue($encoding, 'hex')
    expect(getByLabelText(encodedTextLabel)).toHaveTextContent(expected)
  })
  it('updates text and displays in binary encoding', async () => {
    const expected = '1110100 1100101 1110011 1110100'
    const { getByLabelText } = render(<EncodingUtils />)
    const $text = getByLabelText(textLabel)
    const $encoding = getByLabelText(encodingLabel)
    await userEvent.clear($text)
    await userEvent.type($text, value)
    await selectValue($encoding, 'binary')
    expect(getByLabelText(encodedTextLabel)).toHaveTextContent(expected)
  })
  it('updates encoded text and displays in decoded text', async () => {
    const expected = 'test'
    const { getByLabelText } = render(<EncodingUtils />)
    const $encodedText = getByLabelText(encodedTextLabel)
    const $encoding = getByLabelText(encodingLabel)
    await userEvent.clear($encodedText)
    await userEvent.type($encodedText, 'dGVzdA==')
    await selectValue($encoding, 'base64')
    expect(getByLabelText(textLabel)).toHaveTextContent(expected)
  })
})
