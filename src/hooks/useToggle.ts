import { useCallback, useState } from 'react'

export const useToggle = (value = false) => {
  const [boolean, setBoolean] = useState(value)

  const toggle = useCallback(() => {
    setBoolean((b) => !b)
  }, [])

  return [boolean, toggle] as const
}
