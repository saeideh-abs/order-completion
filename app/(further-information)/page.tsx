'use client'

import { Button, Divider, Input } from '@/components'
import Address from './_components/Address'

export default function FurtherInformation() {
  return (
    <div className="px-5 py-8 flex flex-col justify-between gap-8 h-full">
      <div>
        <p>لطفا اطلاعات شخصی مالک خودرو را وارد کنید:</p>
        <Divider className="mb-4" />
        <div className="flex flex-col gap-[22px]">
          <Input placeholder="کد ملی" />
          <Input placeholder="شماره تلفن همراه" />
        </div>
        <Address />
      </div>
      <Button color="secondary" className="self-end">
        تایید و ادامه
      </Button>
    </div>
  )
}
