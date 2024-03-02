import { useState } from 'react'
import { Button } from '../components/Button'
import { Headline } from '../components/Headline'
import { TextArea } from '../components/TextArea'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'

const DEFAULT_VALUE = 'transform me'

export const StringUtils = () => {
  const [text, setText] = useState(DEFAULT_VALUE)

  const uppercase = () => setText((t) => t.toUpperCase())
  const lowercase = () => setText((t) => t.toLowerCase())
  const reverse = () => setText((t) => t.split('').toReversed().join(''))
  const clap = () => setText((t) => t.replace(/\s/gu, '👏'))
  return (
    <ScreenWithSideNavigation>
      <Headline>Text utilities</Headline>
      <p>
        Time to play with your words! Whether you want to SHOUT OUT your text in uppercase, bring it down to a whisper
        in lowercase, or perform other fun text tricks like swapping cases or capitalizing the first letter of each
        word, this page has got you covered.
      </p>
      <TextArea
        aria-label="enter your text"
        onChange={(e) => setText(e.currentTarget.value)}
        value={text || undefined}
      />
      <div className="grid gap-4 md:grid-cols-4">
        <Button onClick={uppercase}>uppercase</Button>
        <Button onClick={lowercase}>lowercase</Button>
        <Button onClick={reverse}>reverse</Button>
        <Button onClick={clap}>👏</Button>
      </div>
    </ScreenWithSideNavigation>
  )
}
