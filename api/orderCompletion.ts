import { useMutation } from '@tanstack/react-query'
import axios from './axiosConfig/axiosDefaultConf'
import { OrderCompletion } from '@/types'

export function useCreateOrderCompletion() {
  return useMutation({
    mutationFn: async (data: OrderCompletion) => {
      try {
        const res = await axios({
          method: 'post',
          url: '/order/completion/',
          data,
        })
        return res.data
      } catch (error) {
        throw error
      }
    },
  })
}
