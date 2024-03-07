import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Headline } from '../components/Headline'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import en from '../i18n/en'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'
import { encodeString } from '../utils/encoding/encodeString'

export const encodings = ['base64', 'binary', 'hex'] as const

export const EncodingUtils = () => {
  const [text, setText] = useState('')
  const [encoding, setEncoding] = useState(encodings[0])
  const encodedText = encodeString(text, encoding)

  return (
    <ScreenWithSideNavigation>
      <Headline>{en.encoding.title}</Headline>
      <p>{en.encoding.description}</p>
      <div className="grid grid-cols-3 gap-4 items-center md:grid-cols-9">
        <Input
          className="col-span-3"
          type="text"
          aria-label={en.form.text}
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <Select
          className="col-span-3 md:col-span-2"
          aria-label={en.encoding.selectEncoding}
          value={encoding}
          onChange={setEncoding}
        >
          {encodings.map((enc) => (
            <option key={enc}>{enc}</option>
          ))}
        </Select>
        <div className="grid col-span-3 justify-center items-center self-center h-full md:col-span-1">
          <FiArrowRight />
        </div>
        <div className="col-span-3" aria-label={en.encoding.encoded}>
          {encodedText}
        </div>
      </div>
    </ScreenWithSideNavigation>
  )
}
