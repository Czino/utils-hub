import { render } from '@testing-library/react'
import { Headline } from './Headline'

describe('Headline', () => {
  it('should render Headline with styles', () => {
    const { asFragment } = render(<Headline className="mt-4">Test</Headline>)
    expect(asFragment()).toMatchSnapshot()
  })
})
