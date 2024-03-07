import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useToggle } from '../hooks/useToggle'
import en from '../i18n/en'

export const navigation = [
  { path: '/utils/list', title: en.list.shortTitle },
  { path: '/utils/text', title: en.text.shortTitle },
  { path: '/utils/units', title: en.units.shortTitle },
  { path: '/utils/fractions', title: en.fractions.shortTitle },
  { path: '/utils/date', title: en.date.shortTitle },
  { path: '/utils/encoding', title: en.encoding.shortTitle },
  // { path: '/utils/hashing', title: en.hashing.shortTitle },
  // { path: '/utils/numbers', title: en.numbers.shortTitle },
] as const

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
          'md:h-screen md:relative md:left-0 md:w-[240px]',
        ].join(' ')}
      >
        <ul>
          <li className="font-bold">
            <a href="/">{en.home.title}</a>
          </li>
          {navigation.map(({ path, title }) => (
            <li key={path}>
              <a href={path} className={current.includes(path) ? 'text-highlight-1' : ''}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="flex fixed right-0 bottom-0 z-20 justify-end p-4 w-full bg-white md:hidden"
        role="button"
        onClick={toggleIsVisible}
      >
        {isVisible ? (
          <FiX aria-label={en.navigation.closeNavigation} />
        ) : (
          <FiMenu aria-label={en.navigation.openNavigation} />
        )}
      </div>
    </>
  )
}
