import { Buffer } from 'buffer'
import { useState } from 'react'
import { FiArrowDown, FiArrowRight } from 'react-icons/fi'
import { Headline } from '../components/Headline'
import { Select } from '../components/Select'
import { TextArea } from '../components/TextArea'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'

export const algorithms = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'] as const
type Algorithm = (typeof algorithms)[number]

const hashString = async (text: string, algorithm: Algorithm) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  return Buffer.from(await window.crypto.subtle.digest(algorithm, data)).toString('hex')
}

export const HashingUtils = () => {
  const [text, setText] = useState('')
  const [algorithm, setAlgorithm] = useState<Algorithm>(algorithms[0])
  const [hash, setHash] = useState('')

  const updateText = async (newText: string) => {
    setText(newText)
    setHash(await hashString(newText, algorithm))
  }
  const updateAlgorithm = async (newAlgorithm: Algorithm) => {
    setAlgorithm(newAlgorithm)
    setHash(await hashString(text, newAlgorithm))
  }
  return (
    <ScreenWithSideNavigation>
      <Headline>{i18n(en.hashing.title)}</Headline>
      <p>{i18n(en.hashing.description)}</p>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-9">
        <TextArea
          className="col-span-3 text-base"
          aria-label={i18n(en.form.text)}
          value={text}
          onChange={(e) => updateText(e.currentTarget.value)}
        />
        <div className="grid gap-4 items-start col-span-3 md:col-span-2">
          <Select aria-label={i18n(en.hashing.selectAlgorithm)} value={algorithm} onChange={updateAlgorithm}>
            {algorithms.map((algo) => (
              <option key={algo}>{algo}</option>
            ))}
          </Select>
          <div className="flex justify-center">
            <FiArrowRight className="hidden md:block" />
            <FiArrowDown className="md:hidden" />
          </div>
        </div>
        <TextArea className="col-span-3 font-mono text-base" aria-label={i18n(en.hashing.hash)} value={hash} />
      </div>
    </ScreenWithSideNavigation>
  )
}
