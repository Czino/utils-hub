export const Headline = ({ className, children }: React.ComponentProps<'h1'>) => (
  <h1 className={['text-5xl text-success-2 font-bold', className].join(' ')}>{children}</h1>
)
