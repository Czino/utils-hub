export const Headline2 = ({ className, children }: React.ComponentProps<'h2'>) => (
  <h2 className={['text-3xl font-bold text-success-2', className].join(' ')}>{children}</h2>
)
