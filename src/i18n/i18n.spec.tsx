import { i18n, i18nElement } from './i18n'

describe('i18n', () => {
  it('should return the resolved localized text from key with args', () => {
    expect(i18n('this is a localized $foo', { foo: 'bar' })).toBe('this is a localized bar')
    expect(i18n('this is a localized $foo $bar', { foo: 'bar', bar: 'foo' })).toBe('this is a localized bar foo')
    expect(i18n('this is a localized $foo $bar')).toBe('this is a localized $foo $bar')
  })
})
describe('i18nElement', () => {
  it('should return the resolved localized text element from key with args', () => {
    expect(i18nElement('this is a localized\n$foo\n$bar')).toMatchSnapshot('this is a localized $foo $bar')
  })
})
