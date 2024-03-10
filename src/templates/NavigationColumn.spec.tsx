import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { toMatchDiffSnapshot } from 'snapshot-diff'
import { NavigationColumn, navigation } from './NavigationColumn'
expect.extend({ toMatchDiffSnapshot })

describe('NavigationColumn', () => {
  const { asFragment } = render(<NavigationColumn />)
  const base = asFragment()

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: new URL(window.location.href),
    })
  })
  it('should render NavigationColumn', () => {
    expect(base).toMatchSnapshot()
  })
  it('should highlight current page', () => {
    const { path, title } = navigation[1]!
    window.location.href = `http://localhost:3000${path}`
    const { getByText } = render(<NavigationColumn />)

    expect(getByText(title)).toHaveClass('text-highlight-1')
  })
  it('should show NavigationColumn when clicking on menu icon', async () => {
    const { getByLabelText } = render(<NavigationColumn />)
    await userEvent.click(getByLabelText('open navigation'))

    expect(asFragment()).toMatchDiffSnapshot(base)
  })
})
