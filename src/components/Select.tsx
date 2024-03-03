import { FiChevronDown } from 'react-icons/fi'

export const Select = ({ className, children, ...props }: React.ComponentProps<'select'>) => (
  <div className="grid">
    <FiChevronDown className="relative right-1 z-10 col-start-1 row-start-1 justify-self-end self-center w-6 h-6 pointer-events-none" />
    <select
      className={[
        'row-start-1 col-start-1 appearance-none bg-transparent text-dark p-2 border border-dark rounded',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </select>
  </div>
)
