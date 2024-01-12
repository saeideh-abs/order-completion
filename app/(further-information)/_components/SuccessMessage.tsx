import { Button } from '@/components'

export default function SuccessMessage({ getBack }: { getBack: () => void }) {
  return (
    <div className="px-5 py-8 flex flex-col justify-between gap-8 h-full">
      <p className="text-xl font-semibold text-annotation-success">
        اطلاعات شما باموفقیت ثبت شد.
      </p>
      <Button color="secondary" className="self-end" onClick={getBack}>
        بازگشت
      </Button>
    </div>
  )
}
