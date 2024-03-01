export const Headline = ({ className, children }: React.ComponentProps<'h1'>) => (
  <h1 className={['text-5xl', className].join(' ')}>{children}</h1>
)
