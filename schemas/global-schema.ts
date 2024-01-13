import { isValidNationalCode } from '@/utils'
import * as z from 'zod'

export const nationalCode = (message = 'کد ملی وارد شده معتبر نیست.') =>
  z
    .string()
    .min(1, { message: 'این قسمت نمی‌تواند خالی باشد' })
    .refine(code => isValidNationalCode(code), { message })

export const mobilePhone = () =>
  z
    .string()
    .min(1, { message: 'این قسمت نمی‌تواند خالی باشد' })
    .refine(value => /^(09\d{9}|9\d{9})$/.test(value), {
      message: 'شماره موبایل باید با 09 شروع شود و دقیقاً 10 یا 11 رقم باشد.',
    })
