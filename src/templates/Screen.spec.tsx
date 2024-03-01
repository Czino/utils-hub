import { render } from '@testing-library/react'
import { Screen } from './Screen'

describe('Screen', () => {
  it('should render Screen', () => {
    const { asFragment } = render(<Screen />)
    expect(asFragment()).toMatchSnapshot()
  })
})
