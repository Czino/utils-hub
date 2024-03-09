export const Input = ({ className, ...props }: React.ComponentProps<'input'>) => (
  <input
    className={[
      'w-full text-xs md:text-xl appearance-none bg-transparent text-dark p-2 border border-dark rounded',
      className,
    ].join(' ')}
    {...props}
  />
)
