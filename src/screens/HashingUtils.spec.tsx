import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createHash } from 'crypto'
import { TextDecoder, TextEncoder } from 'util'
import { selectValue } from '../../test/helpers/selectValue'
import { HashingUtils } from './HashingUtils'

Object.assign(global, { TextDecoder, TextEncoder })

describe('HashingUtils', () => {
  const textLabel = 'input text'
  const hashingLabel = 'select hashing algorithm'
  const value = 'test'

  beforeEach(() => {
    Object.defineProperty(window, 'crypto', {
      value: {
        subtle: {
          digest: (algorithm: string, secret: string | NodeJS.ArrayBufferView) =>
            createHash(algorithm.toLowerCase().replace('-', '')).update(secret).digest(),
        },
      },
    })
  })
  it('updates text and displays in selected encoding', async () => {
    const { getByLabelText } = render(<HashingUtils />)
    const $text = getByLabelText(textLabel)
    const $algorithm = getByLabelText(hashingLabel)
    await userEvent.clear($text)
    await userEvent.type($text, value)
    await selectValue($algorithm, 'SHA-256')
    expect(getByLabelText('hash')).toHaveValue('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')
  })
})
