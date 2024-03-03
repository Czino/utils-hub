export const Input = ({ className, ...props }: React.ComponentProps<'input'>) => (
  <input
    className={['appearance-none bg-transparent text-dark p-2 border border-dark rounded', className].join(' ')}
    {...props}
  />
)
