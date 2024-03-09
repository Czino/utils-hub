import { render } from '@testing-library/react'
import { Headline2 } from './Headline2'

describe('Headline2', () => {
  it('should render Headline2 with styles', () => {
    const { asFragment } = render(<Headline2 className="mt-4">Test</Headline2>)
    expect(asFragment()).toMatchSnapshot()
  })
})
