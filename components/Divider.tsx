import { cn } from '@/utils'

export interface DividerProps {
  variant?: 'vertical' | 'horizontal'
  className?: string
}

export const Divider = ({
  variant = 'horizontal',
  className,
}: DividerProps) => {
  return (
    <div
      className={cn(
        variant === 'vertical' ? 'w-[1px] h-full' : 'w-full h-[1px]',
        'bg-bmGray-100',
        className,
      )}
    ></div>
  )
}
