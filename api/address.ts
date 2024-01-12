import { AddressType } from '@/types'
import axios from './axiosConfig/axiosDefaultConf'
import { useQuery } from '@tanstack/react-query'

export function useAddressList() {
  return useQuery({
    queryKey: ['address-list'],
    queryFn: async (): Promise<AddressType[]> => {
      try {
        const res = await axios({
          method: 'get',
          url: '/my-addresses',
        })
        return res.data
      } catch (error) {
        throw error
      }
    },
  })
}
