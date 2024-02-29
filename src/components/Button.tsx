export const Button = ({ className, children, ...props }: React.ComponentProps<'button'>) => (
  <button className={`p-4 uppercase bg-orange-600 text-yellow-100 ${className}`} {...props}>
    {children}
  </button>
)
