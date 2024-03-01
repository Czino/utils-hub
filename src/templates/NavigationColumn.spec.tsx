import { render } from '@testing-library/react'
import { NavigationColumn } from './NavigationColumn'

describe('NavigationColumn', () => {
  it('should render NavigationColumn', () => {
    const { asFragment } = render(<NavigationColumn />)
    expect(asFragment()).toMatchSnapshot()
  })
})
