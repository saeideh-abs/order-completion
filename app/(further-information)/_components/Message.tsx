import { Button } from '@/components'

type MessageProps = {
  variant: 'success' | 'error'
  message: string
  getBack: () => void
}

export default function Message({ variant, message, getBack }: MessageProps) {
  return (
    <div className="px-5 py-8 flex flex-col justify-between gap-8 h-full text-xl font-semibold">
      {variant === 'success' ? (
        <p className=" text-annotation-success">{message}</p>
      ) : (
        <div>
          <p className="text-annotation-error">خطا رخ داده است.</p>
          <p className="text-lg text-bmGray-500 mt-4">{message}</p>
        </div>
      )}
      <Button color="secondary" className="self-end" onClick={getBack}>
        بازگشت
      </Button>
    </div>
  )
}
