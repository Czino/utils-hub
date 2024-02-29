import React from 'react'

export const TextArea = ({ className, ...props }: React.ComponentProps<'textarea'>) => (
  <textarea className={`px-2 py-2 h-[300px] w-full border ${className}`} {...props}></textarea>
)
