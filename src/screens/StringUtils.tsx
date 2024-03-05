import { useState } from 'react'
import { Button } from '../components/Button'
import { Headline } from '../components/Headline'
import { TextArea } from '../components/TextArea'
import en from '../i18n/en'
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
      <Headline>{en.text.title}</Headline>
      <p>{en.text.description}</p>
      <TextArea
        aria-label={en.text.enterText}
        onChange={(e) => setText(e.currentTarget.value)}
        value={text || undefined}
      />
      <div className="grid gap-4 md:grid-cols-4">
        <Button onClick={uppercase}>{en.text.uppercase}</Button>
        <Button onClick={lowercase}>{en.text.lowercase}</Button>
        <Button onClick={reverse}>{en.text.reverse}</Button>
        <Button onClick={clap}>{en.text.clap}</Button>
      </div>
    </ScreenWithSideNavigation>
  )
}
