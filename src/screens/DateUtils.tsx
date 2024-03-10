import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Headline } from '../components/Headline'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'
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
      <Headline>{i18n(en.date.title)}</Headline>
      <p>{i18n(en.date.description)}</p>
      <div className="grid grid-cols-3 gap-4 items-center md:grid-cols-9">
        <Input
          className="col-span-3"
          type="datetime-local"
          aria-label={i18n(en.form.date)}
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
        />
        <Select
          className="col-span-3 md:col-span-2"
          aria-label={i18n(en.form.locale)}
          value={locale}
          onChange={(value) => setLocale(value.replace('_', '-'))}
        >
          {locales.map((l) => (
            <option key={l} value={l}>
              {allLocales[l].name} ({i18n(en.language[l])})
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
