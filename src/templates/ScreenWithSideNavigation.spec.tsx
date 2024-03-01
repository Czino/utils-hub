import { render } from '@testing-library/react'
import { ScreenWithSideNavigation } from './ScreenWithSideNavigation'

describe('ScreenWithSideNavigation', () => {
  it('should render ScreenWithSideNavigation', () => {
    const { asFragment } = render(<ScreenWithSideNavigation />)
    expect(asFragment()).toMatchSnapshot()
  })
})
