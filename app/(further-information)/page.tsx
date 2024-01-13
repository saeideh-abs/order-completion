'use client'
import { Button, Divider, ErrorMessage, Input } from '@/components'
import Address from './_components/Address'
import { infer as zInfer, object, string } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { mobilePhone, nationalCode } from '@/schemas/global-schema'
import { useCreateOrderCompletion } from '@/api/orderCompletion'
import { useState } from 'react'
import { cn } from '@/utils'
import Message from './_components/Message'

const formSchema = object({
  nationalCode: nationalCode(),
  phoneNumber: mobilePhone(),
  address: string().min(1, { message: 'آدرس نمی‌تواند خالی باشد' }),
})

export default function FurtherInformation() {
  const [showMsg, setShowMsg] = useState<false | 'success' | 'error'>(false)
  const [errMsg, setErrMsg] = useState<string>('')

  const {
    register,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<zInfer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nationalCode: '',
      phoneNumber: '',
      address: '',
    },
  })

  const createOrderCompletionMu = useCreateOrderCompletion()

  const onSubmit = (data: zInfer<typeof formSchema>) => {
    createOrderCompletionMu.mutate(
      {
        nationalId: data.nationalCode,
        phoneNumber: data.phoneNumber,
        addressId: data.address,
      },
      {
        onSuccess() {
          setShowMsg('success')
        },
        onError: (error: any) => {
          console.log({ ...error })
          setShowMsg('error')
          setErrMsg(error.response.data.errors[0])
        },
      },
    )
  }

  return (
    <>
      {showMsg && (
        <Message
          variant={showMsg === 'success' ? 'success' : 'error'}
          message={
            showMsg === 'success' ? 'اطلاعات شما باموفقیت ثبت شد.' : errMsg
          }
          getBack={() => {
            setShowMsg(false)
            setErrMsg('')
          }}
        />
      )}
      {/* order completion form */}
      {
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn(
            'px-5 py-8 flex flex-col justify-between gap-8 h-full',
            showMsg && 'hidden',
          )}
        >
          <div>
            <p>لطفا اطلاعات شخصی مالک خودرو را وارد کنید:</p>
            <Divider className="mb-4" />

            <div className="flex flex-col gap-[22px] mb-8">
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
            <Address
              onSelectAddress={address => {
                setValue('address', address.id)
                clearErrors('address')
              }}
            />
            <input type="hidden" {...register('address')} />
            <ErrorMessage text={errors.address?.message} />
          </div>
          <Button color="secondary" className="self-end" type="submit">
            تایید و ادامه
          </Button>
        </form>
      }
    </>
  )
}
