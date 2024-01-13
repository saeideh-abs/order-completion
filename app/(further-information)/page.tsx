'use client'
import { Button } from '@/components'
import { infer as zInfer } from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateOrderCompletion } from '@/api/orderCompletion'
import { useState } from 'react'
import { cn } from '@/utils'
import Message from './_components/Message'
import OrderFormInputs from './_components/OrderFormInputs'
import { formSchema } from './schema'

export default function FurtherInformation() {
  const [showMsg, setShowMsg] = useState<false | 'success' | 'error'>(false)
  const [errMsg, setErrMsg] = useState<string>('')

  const methods = useForm<zInfer<typeof formSchema>>({
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
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className={cn(
              'px-5 py-8 flex flex-col justify-between gap-8 h-full',
              showMsg && 'hidden',
            )}
          >
            <OrderFormInputs />
            <Button color="secondary" className="self-end" type="submit">
              تایید و ادامه
            </Button>
          </form>
        </FormProvider>
      }
    </>
  )
}
