import { useState } from 'react'
import { Button } from '../components/Button'
import { TextArea } from '../components/TextArea'
import { shuffle } from '../utils/array/shuffle'
import { sortASC } from '../utils/array/sortASC'
import { sortDESC } from '../utils/array/sortDESC'
import { unique } from '../utils/array/unique'

type SortingFunction = (a: string | number, b: string | number) => -1 | 0 | 1
export const ListSorter = () => {
  const [rawList, setRawList] = useState('')
  const [sorter, setSorter] = useState<SortingFunction>(() => sortASC)

  const sortList = () => {
    setRawList((list) => list.split('\n').toSorted(sorter).join('\n'))
    setSorter((s: SortingFunction) => (s === sortASC ? sortDESC : sortASC))
  }
  const reverseList = () => setRawList((list) => list.split('\n').toReversed().join('\n'))
  const shuffleList = () => setRawList((list) => list.split('\n').toSorted(shuffle).join('\n'))
  const uniqueList = () => setRawList((list) => list.split('\n').filter(unique).join('\n'))

  return (
    <div className="h-full">
      <h1 className="text-xl uppercase">List</h1>
      <TextArea aria-label="enter your list" onChange={(e) => setRawList(e.currentTarget.value)} value={rawList} />
      <div className="grid grid-cols-4 gap-4">
        <Button onClick={sortList}>sort</Button>
        <Button onClick={reverseList}>reverse</Button>
        <Button onClick={shuffleList}>shuffle</Button>
        <Button onClick={uniqueList}>unique</Button>
      </div>
    </div>
  )
}
