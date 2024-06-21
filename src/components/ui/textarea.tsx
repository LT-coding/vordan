import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  setValue?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  required?: boolean
  label?: string
  containerClassName?: string
  labelClassName?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      setValue,
      label,
      required = false,
      containerClassName,
      labelClassName,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('flex w-full flex-col gap-2', containerClassName)}>
        {label && (
          <label htmlFor={id} className={cn('font-medium', labelClassName)}>
            {label} {required && <span className='text-red-600'>*</span>}
          </label>
        )}
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          id={id}
          onChange={setValue}
          required={required}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
