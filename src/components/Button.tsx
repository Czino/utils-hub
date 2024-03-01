export const Button = ({ className, children, ...props }: React.ComponentProps<'button'>) => (
  <button
    className={[
      'p-4 font-bold text-white uppercase rounded bg-success-1 hover:bg-success-2 active:bg-success-3',
      className,
    ].join(' ')}
    {...props}
  >
    {children}
  </button>
)
