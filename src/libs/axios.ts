import axios from "axios"

const $axios = axios.create({
  baseURL: 'https://61b24b74c8d4640017aaf33e.mockapi.io/',
  timeout: 20000,
})

export default $axios