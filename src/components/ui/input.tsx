import * as React from 'react'

import { Label } from '@/components/ui/label'
import { cn, formatInputValue } from '@/lib/utils'

export type InputType = 'integerWithDecimal' | 'integer' | 'decimal' | 'phone'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isNumber?: boolean
  isPhone?: boolean
  label?: string
  required?: boolean
  inputType?: InputType
  containerClassName?: string
  type?: string
  className?: string
  labelClassName?: string
}

const inputVariants =
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      // setValue = () => {},
      id,
      inputType,
      isNumber,
      isPhone,
      label,
      required,
      containerClassName,
      labelClassName,
      value,
      ...props
    },
    ref
  ) => {
    const newValue = inputType ? formatInputValue(value, inputType) : value
    const inputMode =
      isNumber || isPhone || inputType === 'integer'
        ? 'numeric'
        : type === 'email'
          ? 'email'
          : type === 'url'
            ? 'url'
            : type === 'tel'
              ? 'tel'
              : type === 'search'
                ? 'search'
                : 'text'

    return (
      <div className={cn('grid w-full gap-2', containerClassName)}>
        {label && (
          <Label htmlFor={id} className={cn(labelClassName)}>
            {label} {required && <span className='text-red-600'>*</span>}
          </Label>
        )}
        <input
          id={id}
          type={type}
          required={required}
          inputMode={inputMode}
          className={cn(inputVariants, className)}
          ref={ref}
          maxLength={isPhone ? 14 : undefined}
          value={newValue}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input, inputVariants }
