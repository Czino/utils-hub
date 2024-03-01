import { useToggle } from '../hooks/useToggle'

// TODO on mobile the menu icon is best placed in a bottom bar
export const NavigationColumn = () => {
  const [visible, toggleVisible] = useToggle()
  return (
    <nav
      className={['bg-white h-screen absolute md:relative p-4 w-[240px]', !visible && 'left-[-200px] md:left-0'].join(
        ' '
      )}
    >
      <div className="absolute top-4 right-4 md:hidden" role="button" onClick={toggleVisible}>
        Ⅲ
      </div>
      <ul>
        <li>
          <a href="/">Utils Hub</a>
        </li>
        <li>
          <a href="/utils/list">Lists</a>
        </li>
      </ul>
    </nav>
  )
}
