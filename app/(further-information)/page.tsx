'use client'
import { Button, Divider, ErrorMessage, Input } from '@/components'
import Address from './_components/Address'
import { infer as zInfer, object } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { mobilePhone, nationalCode } from '@/schemas/global-schema'

const formSchema = object({
  nationalCode: nationalCode(),
  phoneNumber: mobilePhone(),
})

export default function FurtherInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<zInfer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nationalCode: '',
      phoneNumber: '',
    },
  })

  const onSubmit = (data: zInfer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-5 py-8 flex flex-col justify-between gap-8 h-full">
        <div>
          <p>لطفا اطلاعات شخصی مالک خودرو را وارد کنید:</p>
          <Divider className="mb-4" />
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col">
              <Input
                placeholder="کد ملی"
                {...register('nationalCode')}
                error={!!errors.nationalCode}
              />
              <ErrorMessage text={errors.nationalCode?.message} />
            </div>

            <div className="flex flex-col">
              <Input
                placeholder="شماره تلفن همراه"
                {...register('phoneNumber')}
                error={!!errors.phoneNumber}
              />
              <ErrorMessage text={errors.phoneNumber?.message} />
            </div>
          </div>
          <Address />
        </div>
        <Button color="secondary" className="self-end" type="submit">
          تایید و ادامه
        </Button>
      </div>
    </form>
  )
}
