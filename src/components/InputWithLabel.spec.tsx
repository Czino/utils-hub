import { render } from '@testing-library/react'
import { InputWithLabel } from './InputWithLabel'

describe('InputWithLabel', () => {
  it('should render InputWithLabel with styles', () => {
    const { asFragment } = render(<InputWithLabel label="label" className="mt-4" value="text" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
