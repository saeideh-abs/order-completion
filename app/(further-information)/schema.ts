import { object, string } from 'zod'
import { mobilePhone, nationalCode } from '@/schemas/global-schema'

export const formSchema = object({
  nationalCode: nationalCode(),
  phoneNumber: mobilePhone(),
  address: string().min(1, { message: 'آدرس نمی‌تواند خالی باشد' }),
})
