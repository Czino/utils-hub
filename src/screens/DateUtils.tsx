import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Headline } from '../components/Headline'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import en from '../i18n/en'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'
import allLocales from '../utils/locale/allLocales'
import { keys } from '../utils/object/keys'
const locales = keys(allLocales)
const FORMATS = ['L', 'LL', 'LLL', 'LLLL']
dayjs.extend(LocalizedFormat)

export const DateUtils = () => {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD hh:mm'))
  const [locale, setLocale] = useState('en')
  const localizedDate = dayjs(date).locale(locale)
  return (
    <ScreenWithSideNavigation>
      <Headline>Date format converter</Headline>
      <p>
        Whether you're a developer wrestling with date formats between systems, a professional managing international
        projects, or a student dealing with diverse date formats in research, our tool is designed to cater to your
        needs. Instantly convert dates between different formats, including ISO, US, European, and more, with ease and
        precision. Save time and eliminate errors in your work with our user-friendly date conversion tool.
      </p>
      <div className="grid grid-cols-3 gap-4 items-center md:grid-cols-9">
        <Input
          className="col-span-3"
          type="datetime-local"
          aria-label="input date"
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
        />
        <Select
          className="col-span-3 md:col-span-2"
          aria-label="select locale"
          value={locale}
          onChange={(value) => setLocale(value.replace('_', '-'))}
        >
          {locales.map((l) => (
            <option value={l}>
              {allLocales[l].name} ({en.language[l]})
            </option>
          ))}
        </Select>
        <div className="grid col-span-3 justify-center items-center self-center h-full md:col-span-1">
          <FiArrowRight />
        </div>
        <div className="col-span-3">
          {localizedDate.isValid() && (
            <ul>
              <li>{localizedDate.toISOString()}</li>

              {FORMATS.map((format) => (
                <li key={format}>{localizedDate.format(format)}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </ScreenWithSideNavigation>
  )
}
