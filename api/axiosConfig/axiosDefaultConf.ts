import axios from 'axios'

const instance = axios.create({})

instance.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
instance.defaults.timeout = 10000

export default instance