import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useToggle } from '../hooks/useToggle'

const navigation = [{ path: '/utils/list', title: 'Lists' }]
export const NavigationColumn = () => {
  const [isVisible, toggleIsVisible] = useToggle()
  const [current, setCurrent] = useState('')

  useEffect(() => {
    setCurrent(window.location.pathname)
  }, [])

  return (
    <>
      <nav
        className={[
          'bg-white absolute p-4 transition-[top]',
          'w-full h-full',
          isVisible ? 'top-12' : 'top-full',
          'md:h-screen md:relative md:left-0 md:w-[240px]',
        ].join(' ')}
      >
        <ul>
          <li className="font-bold">
            <a href="/">UtilityHub</a>
          </li>
          {navigation.map(({ path, title }) => (
            <li key={path}>
              <a href={path} className={path === current ? 'text-highlight-1' : ''}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="flex absolute right-0 bottom-0 justify-end p-4 w-full bg-white md:hidden"
        role="button"
        onClick={toggleIsVisible}
      >
        {isVisible ? <FiX /> : <FiMenu />}
      </div>
    </>
  )
}
