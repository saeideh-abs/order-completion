import { cn } from '@/utils'
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react'
import { iranYekan } from '@/styles/fonts'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
}

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren & ButtonProps
>(function (
  {
    color = 'primary',
    size = 'md',
    block = false,
    className,
    children,
    ...props
  },
  ref,
) {
  const defaultStyle = cn(
    `outline-none border-none cursor-pointer w-fit px-5`,
    iranYekan.className,
  )

  const disableStyle = `disabled:opacity-50 disabled:cursor-not-allowed`

  const sizeStyle = {
    sm: `h-10 text-base font-medium`,
    md: 'h-12 text-base font-semibold',
    lg: 'h-14 text-lg font-semibold',
  }

  const style = {
    solid: {
      primary: `bg-primary-500 text-primary-contrast hover:enabled:bg-primary-500/80 active:enabled:bg-primary-500/90`,
      secondary: `bg-secondary-500 text-secondary-contrast hover:enabled:bg-secondary-500/80 active:enabled:bg-secondary-500/90`,
    },
  }

  return (
    <button
      ref={ref}
      className={cn(
        defaultStyle,
        sizeStyle[size],
        style['solid'][color],
        block ? `w-full` : `min-w-[140px]`,
        disableStyle,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
