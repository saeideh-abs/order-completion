import { iranYekan } from '@/styles/fonts'
import { cn } from '@/utils'
import { forwardRef } from 'react'
import { inputStyle, inputErrorStyle } from './styles'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        className={cn(
          iranYekan.className,
          inputStyle,
          error && inputErrorStyle,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
