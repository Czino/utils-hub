import React from 'react'

export const TextArea = ({ className, ...props }: React.ComponentProps<'textarea'>) => (
  <textarea className={`px-2 py-2 w-full rounded border h-[300px] border-dark ${className}`} {...props}></textarea>
)
