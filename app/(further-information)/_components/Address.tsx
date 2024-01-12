import { Button, Divider, RadioGroup, RadioGroupItem } from '@/components'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components'
import { IconClose } from '@/icons'

export default function Address() {
  return (
    <Sheet>
      <p className="font-semibold">آدرس جهت درج روی بیمه‌نامه</p>
      <Divider className="mb-4" />
      <p className="text-sm m-0">
        لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
      </p>
      <SheetTrigger asChild>
        <Button color="primary" block className="mt-6">
          انتخاب از آدرس های من
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[70%]">
        <AddressOptions />
      </SheetContent>
    </Sheet>
  )
}

const AddressOptions = () => {
  return (
    <div className="flex flex-col h-full">
      <AddressHeader />

      <div className="p-5 grow overflow-auto">
        <RadioGroup defaultValue="default" dir="rtl">
          <div className="flex gap-3">
            <RadioGroupItem value={'default'} id={'564'} />
            <label>default</label>
          </div>
          <div className="flex gap-3">
            <RadioGroupItem value={'hi'} id={'564'} />
            <label>hi</label>
          </div>
        </RadioGroup>
      </div>
      <div className="p-5 shadow-elevation2">
        <Button size="sm" color="secondary" block>
          انتخاب
        </Button>
      </div>
    </div>
  )
}

const AddressHeader = () => {
  return (
    <div className="h-[61px] border-0 border-b border-solid border-bmGray-100 flex items-center justify-between px-5 font-medium">
      <p>انتخاب آدرس</p>
      <SheetClose asChild>
        <IconClose className="w-6 h-6 text-bmGray-200 cursor-pointer" />
      </SheetClose>
    </div>
  )
}
