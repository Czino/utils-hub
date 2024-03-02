import { act, renderHook } from '@testing-library/react'
import { useToggle } from './useToggle'

describe('useToggle', () => {
  it('should return defaults', () => {
    const { result } = renderHook(useToggle)
    expect(result.current).toEqual([false, expect.any(Function)])
  })
  it('should init with value', () => {
    const { result } = renderHook(useToggle, { initialProps: true })
    expect(result.current[0]).toBeTruthy()
  })
  it('should toggle value', () => {
    const { result } = renderHook(useToggle)
    expect(result.current[0]).toBeFalsy()
    act(result.current[1])
    expect(result.current[0]).toBeTruthy()
    act(result.current[1])
    expect(result.current[0]).toBeFalsy()
  })
})
