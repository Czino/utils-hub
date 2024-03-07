import { useState } from 'react'
import { Button } from '../components/Button'
import { Headline } from '../components/Headline'
import { TextArea } from '../components/TextArea'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'

const DEFAULT_VALUE = en.text.transformMe

export const StringUtils = () => {
  const [text, setText] = useState(DEFAULT_VALUE)

  const uppercase = () => setText((t) => t.toUpperCase())
  const lowercase = () => setText((t) => t.toLowerCase())
  const reverse = () => setText((t) => t.split('').toReversed().join(''))
  const clap = () => setText((t) => t.replace(/\s/gu, '👏'))
  return (
    <ScreenWithSideNavigation>
      <Headline>{i18n(en.text.title)}</Headline>
      <p>{i18n(en.text.description)}</p>
      <TextArea
        aria-label={i18n(en.text.enterText)}
        onChange={(e) => setText(e.currentTarget.value)}
        value={text || undefined}
      />
      <div className="grid gap-4 md:grid-cols-4">
        <Button onClick={uppercase}>{i18n(en.text.uppercase)}</Button>
        <Button onClick={lowercase}>{i18n(en.text.lowercase)}</Button>
        <Button onClick={reverse}>{i18n(en.text.reverse)}</Button>
        <Button onClick={clap}>{i18n(en.text.clap)}</Button>
      </div>
    </ScreenWithSideNavigation>
  )
}
