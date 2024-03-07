import { keys } from '../utils/object/keys'

export const i18n = (template: string, args: Record<string, string> = {}) => {
  let transformed = template

  keys(args).forEach((key) => {
    const value = args[key] || `$${key}`
    transformed = transformed.replace(new RegExp(`\\$${key}`, 'gu'), value)
  })
  return transformed
}

export const i18nElement = (template: string, args: Record<string, string> = {}) =>
  i18n(template, args)
    .split('\n')
    .map((str) => (
      <>
        {str}
        <br />
      </>
    ))
