export const TextLink = ({ className, children, ...props }: React.ComponentProps<'a'>) => (
  <a
    className={['text-highlight-1 hover:underline active:text-highlight-2 visited:text-success-2', className].join(' ')}
    {...props}
  >
    {children}
  </a>
)
