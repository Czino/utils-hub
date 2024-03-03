import { render } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('should render Input with styles', () => {
    const { asFragment } = render(<Input className="mt-4" value="text" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
