import * as z from 'zod'

export const nationalCode = () =>
  z
    .string()
    .min(1, { message: 'این قسمت نمی‌تواند خالی باشد' })
    .refine(value => /^\d{10}$/.test(value), {
      message: 'کدملی وارد شده معتبر نیست',
    })

export const mobilePhone = () =>
  z
    .string()
    .min(1, { message: 'این قسمت نمی‌تواند خالی باشد' })
    .refine(value => /^(09\d{9}|9\d{9})$/.test(value), {
      message: 'شماره موبایل باید با 09 شروع شود و دقیقاً 10 یا 11 رقم باشد.',
    })
