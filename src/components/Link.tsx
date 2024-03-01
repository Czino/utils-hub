export const Link = ({ className, ...props }: React.ComponentProps<'a'>) => (
  <a className={['text-highlight-1 hover:text-highlight-2 active:text-highlight-3', className].join(' ')} {...props} />
)
