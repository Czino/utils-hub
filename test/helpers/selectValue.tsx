import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export const selectValue = async ($element: Element, value: string) => {
  await userEvent.clear($element)
  await userEvent.type($element, value)
  await userEvent.click(screen.getByLabelText(`option ${value}`))
}
