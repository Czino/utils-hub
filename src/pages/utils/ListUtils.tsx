import { useState } from 'react'
import { Button } from '../../components/Button'
import { Headline } from '../../components/Headline'
import { TextArea } from '../../components/TextArea'
import { ScreenWithSideNavigation } from '../../templates/ScreenWithSideNavigation'
import { shuffle } from '../../utils/array/shuffle'
import { sortASC } from '../../utils/array/sortASC'
import { sortDESC } from '../../utils/array/sortDESC'
import { unique } from '../../utils/array/unique'

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
      <Headline>ListUtils</Headline>
      <TextArea
        aria-label="enter your list"
        onChange={(e) => setRawList(e.currentTarget.value)}
        value={rawList || undefined}
      />
      <div className="grid grid-cols-4 gap-4">
        <Button onClick={sortList}>sort</Button>
        <Button onClick={reverseList}>reverse</Button>
        <Button onClick={shuffleList}>shuffle</Button>
        <Button onClick={uniqueList}>unique</Button>
      </div>
    </ScreenWithSideNavigation>
  )
}
