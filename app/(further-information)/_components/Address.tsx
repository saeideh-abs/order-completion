import { Button, Divider } from '@/components'
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
        انتخاب آدرس
      </SheetContent>
    </Sheet>
  )
}
