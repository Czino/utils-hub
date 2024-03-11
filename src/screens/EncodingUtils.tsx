import { useState } from 'react'
import { FiArrowDown, FiArrowRight } from 'react-icons/fi'
import { Headline } from '../components/Headline'
import { Select } from '../components/Select'
import { TextArea } from '../components/TextArea'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'
import { decodeString } from '../utils/encoding/decodeString'
import { encodeString } from '../utils/encoding/encodeString'

export const encodings = ['base64', 'binary', 'hex'] as const
type Encoding = (typeof encodings)[number]
export const EncodingUtils = () => {
  const [text, setText] = useState('')
  const [encoding, setEncoding] = useState<Encoding>(encodings[0])
  const [encodedText, setEncodedText] = useState(encodeString(text, encoding))

  const updateText = (newText: string) => {
    setText(newText)
    setEncodedText(encodeString(newText, encoding))
  }
  const updateEncoding = (newEncoding: Encoding) => {
    setEncoding(newEncoding)
    setEncodedText(encodeString(text, newEncoding))
  }
  const updateEncodedText = (newEncodedText: string) => {
    setEncodedText(newEncodedText)
    setText(decodeString(newEncodedText, encoding))
  }
  return (
    <ScreenWithSideNavigation>
      <Headline>{i18n(en.encoding.title)}</Headline>
      <p>{i18n(en.encoding.description)}</p>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-9">
        <TextArea
          className="col-span-3 text-base"
          aria-label={i18n(en.form.text)}
          value={text}
          onChange={(e) => updateText(e.currentTarget.value)}
        />
        <div className="grid gap-4 items-start col-span-3 md:col-span-2">
          <Select aria-label={i18n(en.encoding.selectEncoding)} value={encoding} onChange={updateEncoding}>
            {encodings.map((enc) => (
              <option key={enc}>{enc}</option>
            ))}
          </Select>
          <div className="flex justify-center">
            <FiArrowRight className="hidden md:block" />
            <FiArrowDown className="md:hidden" />
          </div>
        </div>
        <TextArea
          className="col-span-3 font-mono text-base"
          aria-label={i18n(en.encoding.inputEncodedText)}
          value={encodedText}
          onChange={(e) => updateEncodedText(e.currentTarget.value)}
        />
      </div>
    </ScreenWithSideNavigation>
  )
}
