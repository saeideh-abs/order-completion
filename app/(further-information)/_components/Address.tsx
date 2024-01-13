'use client'
import { useAddressList } from '@/api/address'
import { Button, Divider, RadioGroup, RadioGroupItem } from '@/components'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components'
import { IconClose } from '@/icons'
import { AddressType } from '@/types'
import { useState } from 'react'

export default function Address({
  onSelectAddress,
}: {
  onSelectAddress: (adr: AddressType) => void
}) {
  const { data: addresses, error, isLoading } = useAddressList()
  const [finalAddress, setFinalAddress] = useState<AddressType>()

  const handleSelect = (finalAddress: AddressType) => {
    onSelectAddress(finalAddress)
    setFinalAddress(finalAddress)
  }
  return (
    <Sheet>
      <p className="font-semibold">آدرس جهت درج روی بیمه‌نامه</p>
      <Divider className="mb-4" />

      {finalAddress ? (
        <p>{finalAddress.name}</p>
      ) : (
        <p className="text-sm m-0">
          لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
        </p>
      )}

      <SheetTrigger asChild>
        <Button color="primary" block className="mt-6">
          انتخاب از آدرس های من
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[70%]">
        {isLoading ? (
          <div className="text-center p-5">در حال دریافت اطلاعات...</div>
        ) : error ? (
          <div className="text-center p-5">خطا رخ داده است.</div>
        ) : (
          <AddressOptions
            addresses={addresses ?? []}
            onSelectAddress={handleSelect}
          />
        )}
      </SheetContent>
    </Sheet>
  )
}

type AddressOptionsProps = {
  addresses: AddressType[]
  onSelectAddress: (adr: AddressType) => void
}
const AddressOptions = ({
  addresses,
  onSelectAddress,
}: AddressOptionsProps) => {
  const [selected, setSelected] = useState<AddressType>()

  const handleSelectAddress = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    address: typeof selected,
  ) => {
    if (address?.id) {
      onSelectAddress(selected as AddressType)
    } else e.preventDefault()
  }

  return (
    <div className="flex flex-col h-full">
      <AddressHeader />

      <div className="p-5 grow overflow-auto">
        <RadioGroup
          dir="rtl"
          value={selected?.id}
          onValueChange={value => {
            const adrs = addresses.find(x => x.id === value)
            setSelected(adrs)
          }}
        >
          {addresses.map(item => (
            <div key={item.id} className="flex gap-3">
              <RadioGroupItem value={item.id} id={item.id} />
              <div className="flex flex-col gap-[10px]">
                <label>{item.name}</label>
                <p className="text-xs text-bmGray-500">{item.details}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="p-5 shadow-elevation2">
        <SheetClose asChild>
          <Button
            size="sm"
            color="secondary"
            block
            disabled={!selected}
            type="submit"
            onClick={e => handleSelectAddress(e, selected)}
          >
            انتخاب
          </Button>
        </SheetClose>
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
