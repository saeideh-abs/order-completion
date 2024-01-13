import { Divider, ErrorMessage, Input } from '@/components'
import Address from './Address'
import { useFormContext } from 'react-hook-form'
import { infer as zInfer } from 'zod'
import { formSchema } from '../schema'

export default function OrderFormInputs() {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext<zInfer<typeof formSchema>>()

  return (
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
  )
}
