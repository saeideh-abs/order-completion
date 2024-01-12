import { cn } from '@/utils'

export const ErrorMessage = ({
  text,
  className,
}: {
  text: string | undefined
  className?: string
}) => {
  return (
    <div className={cn('mt-2 text-2xs text-annotation-error', className)}>
      {text}
    </div>
  )
}
