import { useState } from 'react'
import { Button } from '../components/Button'
import { Headline } from '../components/Headline'
import { TextArea } from '../components/TextArea'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'
import { shuffle } from '../utils/array/shuffle'
import { sortASC } from '../utils/array/sortASC'
import { sortDESC } from '../utils/array/sortDESC'
import { unique } from '../utils/array/unique'

const DEFAULT_VALUE = 'L\nI\nS\nT\nU\nT\nI\nL\nS'
type SortingFunction = (a: string | number, b: string | number) => -1 | 0 | 1

export const ListUtils = () => {
  const [rawList, setRawList] = useState(DEFAULT_VALUE)
  const [sorter, setSorter] = useState<SortingFunction>(() => sortASC)

  const sortList = () => {
    setRawList((list) => list.split('\n').toSorted(sorter).join('\n'))
    setSorter((s: SortingFunction) => (s === sortASC ? sortDESC : sortASC))
  }
  const reverseList = () => setRawList((list) => list.split('\n').toReversed().join('\n'))
  const shuffleList = () => setRawList((list) => list.split('\n').toSorted(shuffle).join('\n'))
  const uniqueList = () => setRawList((list) => list.split('\n').filter(unique).join('\n'))

  return (
    <ScreenWithSideNavigation>
      <Headline>{i18n(en.list.title)}</Headline>
      <p>{i18n(en.list.description)}</p>
      <TextArea
        aria-label={i18n(en.list.enterList)}
        onChange={(e) => setRawList(e.currentTarget.value)}
        value={rawList || undefined}
      />
      <div className="grid gap-4 md:grid-cols-4">
        <Button onClick={sortList}>{i18n(en.list.sort)}</Button>
        <Button onClick={reverseList}>{i18n(en.list.reverse)}</Button>
        <Button onClick={shuffleList}>{i18n(en.list.shuffle)}</Button>
        <Button onClick={uniqueList}>{i18n(en.list.unique)}</Button>
      </div>
    </ScreenWithSideNavigation>
  )
}
