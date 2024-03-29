import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useToggle } from '../hooks/useToggle'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'

type NavigationItem = {
  path?: string
  title: string
}
export const navigation: NavigationItem[] = [
  { title: en.navigation.time },
  { path: '/utils/time/date', title: en.date.shortTitle },
  { title: en.navigation.numbers },
  { path: '/utils/numbers/base', title: en.base.shortTitle },
  { path: '/utils/numbers/fractions', title: en.fractions.shortTitle },
  { path: '/utils/numbers/percentages', title: en.percentages.shortTitle },
  { path: '/utils/units', title: en.units.shortTitle },
  { title: en.navigation.text },
  { path: '/utils/text', title: en.text.shortTitle },
  { path: '/utils/text/list', title: en.list.shortTitle },
  { path: '/utils/text/encoding', title: en.encoding.shortTitle },
  { path: '/utils/text/hash-functions', title: en.hashing.shortTitle },
]

export const NavigationColumn = () => {
  const [isVisible, toggleIsVisible] = useToggle()
  const [current, setCurrent] = useState('')

  useEffect(() => {
    setCurrent(window.location.pathname)
  }, [])

  return (
    <>
      <div
        className={[
          'fixed inset-0 transition-[opacity] bg-black pointer-events-none',
          isVisible ? 'opacity-50' : 'opacity-0',
        ].join(' ')}
      ></div>
      <nav
        className={[
          'bg-white fixed z-10 p-4 transition-[top] overflow-auto pb-32',
          'w-full h-full',
          isVisible ? 'top-12' : 'top-full',
          'md:h-screen md:relative md:left-0 md:w-[240px] md:border-right-1',
        ].join(' ')}
      >
        <ul>
          <li className="font-bold">
            <h1>
              <a href="/">{i18n(en.home.title)}</a>
            </h1>
          </li>
          {navigation.map(({ path, title }) => (
            <li key={path || title}>
              {path ? (
                <a href={path} className={current === path ? 'text-highlight-1' : ''}>
                  {title}
                </a>
              ) : (
                <h2 className="mt-4 font-bold">{title}</h2>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={[
          'flex fixed right-0 bottom-0 z-20 justify-end p-4 w-full bg-white  md:hidden ',
          !isVisible && 'border shadow-2xl border-top-1',
        ].join(' ')}
        role="button"
        onClick={toggleIsVisible}
      >
        {isVisible ? (
          <FiX aria-label={i18n(en.navigation.closeNavigation)} />
        ) : (
          <FiMenu aria-label={i18n(en.navigation.openNavigation)} />
        )}
      </div>
    </>
  )
}
